from realesrgan_ncnn_py import Realesrgan

class Esrgan:

    def __init__(self, gpuid, upscaling_factor):
        self.upscaling_factor = upscaling_factor - 2
        self.gpuid = gpuid
        self.model_name = 'esrgan-ncnn'
        self.__realesrgan = Realesrgan(gpuid=self.gpuid, tta_mode=False, model=self.upscaling_factor)

    def __getattr__(self, value):
        return

    def run(self, frame):
        frame = self.__realesrgan.process_cv2(frame)
        return frame