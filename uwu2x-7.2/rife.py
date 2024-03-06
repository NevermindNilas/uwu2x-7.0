from rife_ncnn_vulkan_python import Rife as RifeNCNN
from PIL import Image

class Rife:
    def __init__(self, UHD, interpolation_model, gpuid):
        self.UHD = UHD
        self.interpolation_model = interpolation_model
        self.gpuid = gpuid
        match self.interpolation_model:
            pass  # postinserted
        case 'rife4.14-ncnn':
            self.interpolation_model = 'rife-v4.14'
        else:  # inserted
            case 'rife4.14-ensemble-ncnn':
                self.interpolation_model = 'rife-v4.14-ensemble'
            else:  # inserted
                case 'rife4.14-lite-ncnn':
                    self.interpolation_model = 'rife-v4.14-lite'
                else:  # inserted
                    case 'rife4.14-lite-ensemble-ncnn':
                        self.interpolation_model = 'rife-v4.14-lite-ensemble'
                    else:  # inserted
                        case 'rife4.13-lite-ncnn':
                            self.interpolation_model = 'rife-v4.13-lite'
                        else:  # inserted
                            case 'rife4.13-lite-ensemble-ncnn':
                                self.interpolation_model = 'rife-v4.13-lite-ensemble'
                            else:  # inserted
                                case 'rife4.6-ensemble-ncnn':
                                    self.interpolation_model = 'rife-v4.6'
                                else:  # inserted
                                    case 'rife4.6-ncnn':
                                        self.interpolation_model = 'rife-v4.6-ensemble'
        self.__rife = RifeNCNN(gpuid=self.gpuid, model=self.interpolation_model, scale=2, tta_mode=False, tta_temporal_mode=False, uhd_mode=self.UHD, num_threads=1)

    def make_inference(self, timestep):
        output = self.__rife.process(self._I0, self._I1, timestep=timestep)
        return output

    def run(self, frame, next_frame):
        self._I0 = Image.fromarray(frame)
        self._I1 = Image.fromarray(next_frame)