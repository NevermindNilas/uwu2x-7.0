from reader import Reader
from cugan import Cugan
from esrgan import Esrgan
from rife import Rife
from writer import Writer
from queue import Queue

class Processor:
    def __init__(self, socket):
        self.__socket = socket
        self.__socket.emit('ready', 'The processor is ready!')

    def __getattr__(self, value):
        return

    def start(self, input_video, output_video, upscaling_factor, upscaling_model, interpolation_factor, interpolation_model, cugan_denoise, output_format, gpuid):
        try:
            self.__socket.emit('progress', {'message': 'Initializing...', 'progress': 0})
            self.__input_video = input_video
            self.__output_video = output_video
            self.__upscaling_factor = int(upscaling_factor)
            self.__upscaling_model = upscaling_model
            self.__interpolation_factor = int(interpolation_factor)
            self.__interpolation_model = interpolation_model
            self.__cugan_denoise = cugan_denoise
            self.__output_format = output_format
            self.__gpuid = int(gpuid)
            self.__input_queue = Queue()
            self.__output_queue = Queue()
            self.__fps, self.__width, self.__height, self.__frame_count, self.__thread_reader = Reader(self.__input_video, self.__input_queue).start_reading()
            self.__thread_writer = Writer(self.__output_format, self.__output_video, self.__output_queue, self.__fps * self.__interpolation_factor, self.__width * self.__upscaling_factor, self.__height * self.__upscaling_factor, self.__frame_count if self.__interpolation_factor == 1 else self.__frame_count + (self.__frame_count - 1) * self.__interpolation_factor), self.__socket).start_writing()
            self.__UHD = self.__width * self.__upscaling_factor >= 3840 and self.__height * self.__upscaling_factor >= 2160
            if self.__upscaling_factor > 1:
                if not self.__upscaler or self.__upscaler.gpuid != self.__gpuid or self.__upscaler.upscaling_factor != self.__upscaling_factor or (self.__upscaler.model_name != self.__upscaling_model) or (self.__upscaler.denoise != self.__cugan_denoise):
                    match self.__upscaling_model:
                        pass  # postinserted
                    case 'cugan-ncnn':
                        self.__upscaler = Cugan(self.__gpuid, self.__upscaling_factor, self.__cugan_denoise)
                    else:  # inserted
                        case 'esrgan-ncnn':
                            self.__upscaler = Esrgan(self.__gpuid, self.__upscaling_factor)
            if self.__interpolation_factor > 1 and (not self.__interpolater or self.__interpolater.UHD != self.__UHD or self.__interpolater.interpolation_model != self.__interpolation_model or (self.__interpolater.gpuid != self.__gpuid)):
                self.__interpolater = Rife(self.__UHD, self.__interpolation_model, self.__gpuid)
            frame = self.__input_queue.get()
            if self.__upscaling_factor > 1:
                frame = self.__upscaler.run(frame)
            self.__output_queue.put(frame)
            for _ in range(self.__frame_count - 1):
                next_frame = self.__input_queue.get()
                if self.__upscaling_factor > 1:
                    next_frame = self.__upscaler.run(next_frame)
                if self.__interpolation_factor > 1:
                    self.__interpolater.run(frame, next_frame)
                    for i in range(1, self.__interpolation_factor + 1):
                        output_frame = self.__interpolater.make_inference(i * (1 / (self.__interpolation_factor + 1)))
                        self.__output_queue.put(output_frame)
                self.__output_queue.put(next_frame)
                frame = next_frame
            self.__thread_writer.join()
            self.__socket.emit('over', {'input_video': self.__input_video, 'ouput_video': self.__output_video})
        except Exception as err:
            self.__socket.emit('error', str(err))