import argparse
import socketio
from processor import Processor
import wmi

class Connector(Processor):

    def __init__(self, url):
        self.__url = url
        self.__socket = socketio.Client()
        self.__socket.connect(self.__url)
        computer = wmi.WMI()
        processors = []
        cpu = computer.Win32_Processor()[0]
        processors.append(cpu.Name)
        gpus = computer.Win32_VideoController()
        if gpus:
            for gpu in gpus:
                processors.append(gpu.Name)
        self.__socket.emit('processors', processors)
        Processor.__init__(self, self.__socket)

        @self.__socket.event
        def start(data):
            self.start(input_video=data['input_video'], output_video=data['output_video'], upscaling_factor=data['upscaling_factor'], upscaling_model=data['upscaling_model'], interpolation_factor=data['interpolation_factor'], interpolation_model=data['interpolation_model'], cugan_denoise=data['cugan_denoise'], output_format=data['output_format'], gpuid=data['gpuid'])
        self.__socket.wait()
argparser = argparse.ArgumentParser()
argparser.add_argument('--url', type=str)
args = argparser.parse_args()
connector = Connector(args.url)