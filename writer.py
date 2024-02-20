import subprocess
from queue import Queue
import threading
import numpy as np

class Writer:

    def __init__(self, output_format, video_output_path, queue, fps, width, height, frame_count, socket) -> None:
        self.output_format = output_format
        self.fps = fps
        self.width = width
        self.height = height
        self.frame_count = frame_count
        self.queue = queue
        self.video_output_path = video_output_path
        self.socket = socket

    @property
    def queue(self):
        return self._queue

    @queue.setter
    def queue(self, queue):
        if not isinstance(queue, Queue):
            raise ValueError('Queue must be an instance of Queue')
        self._queue = queue

    @property
    def video_output_path(self):
        return self._video_output_path

    @video_output_path.setter
    def video_output_path(self, video_output_path):
        if not isinstance(video_output_path, str):
            raise ValueError('Video output path must be a string')
        self._video_output_path = video_output_path

    def __write_frames(self):
        command = ['ffmpeg.exe', '-y', '-hide_banner', '-loglevel', 'quiet', '-f', 'rawvideo', '-vcodec', 'rawvideo', f'-s{self.width}x{self.height}', '-pix_fmt', 'rgb24', '-r', str(self.fps), '-i', '-', '-an', '-vcodec', self.output_format, '-preset', 'veryfast', '-crf', '14', '-pix_fmt', 'yuv422p', '-vf', 'setsar=sar=1/1', self.video_output_path]
        process = subprocess.Popen(command, stdin=subprocess.PIPE)
        count = self.frame_count
        self.socket.emit('progress', {'message': 'Processing...', 'progress': 0})
        while count:
            frame = self.queue.get()
            frame = np.ascontiguousarray(frame)
            process.stdin.write(frame.tobytes())
            count -= 1
            self.socket.emit('progress', {'message': 'Processing...', 'progress': (self.frame_count - count) / self.frame_count})
        process.stdin.close()
        self.socket.emit('progress', {'message': 'Finalizing...', 'progress': 1})
        try:
            process.wait(3)
        except subprocess.TimeoutExpired:
            process.kill()

    def start_writing(self):
        thread = threading.Thread(target=self.__write_frames)
        thread.start()
        return thread