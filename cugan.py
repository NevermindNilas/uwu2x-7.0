from realcugan_ncnn_py import Realcugan

class Cugan:

    def __init__(self, gpuid, upscaling_factor, denoise):
        self.upscaling_factor = upscaling_factor
        self.gpuid = gpuid
        self.denoise = denoise
        self.model_name = 'cugan-ncnn'
        self.__realcugan = Realcugan(num_threads=1, gpuid=self.gpuid, tta_mode=False, scale=self.upscaling_factor, noise=['no-denoise', 'conservative', 'denoise1x', 'denoise2x'].index(self.denoise) - 1)

    def run(self, frame):
        frame = self.__realcugan.process_cv2(frame)
        return frame