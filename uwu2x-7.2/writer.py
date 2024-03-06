import os
import shutil
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

    def __ffmpeg_format(self, output_format):
        if output_format == 'jpg':
            if os.path.exists(self.video_output_path):
                shutil.rmtree(self.video_output_path)
            os.makedirs(self.video_output_path)
            return [self.video_output_path + '/frame%d.jpg']
        if output_format == 'png':
            if os.path.exists(self.video_output_path):
                shutil.rmtree(self.video_output_path)
            os.makedirs(self.video_output_path)
            return [self.video_output_path + '/frame%d.png']
        if os.path.exists(self.video_output_path):
            shutil.rmtree(self.video_output_path)
        os.makedirs(self.video_output_path)
        return [self.video_output_path + '/frame%d.png']

    def __write_frames(self):
        command = ['ffmpeg.exe', '-y', '-hide_banner', '-loglevel', 'quiet', '-f', 'rawvideo', '-vcodec', 'rawvideo', f'-s{self.width}x{self.height}', '-pix_fmt', 'rgb24', '-r', str(self.fps), '-i', '-', '-an'] + self.__ffmpeg_format(self.output_format)
        process = subprocess.Popen(command, stdin=subprocess.PIPE)
        self.socket.emit('progress', {'message': 'Processing...', 'progress': 0})
        for i in range(1, self.frame_count + 1):
            frame = self.queue.get()
            frame = np.ascontiguousarray(frame)
            process.stdin.write(frame.tobytes())
            self.socket.emit('progress', {'message': 'Processing...', 'progress': i / self.frame_count})
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