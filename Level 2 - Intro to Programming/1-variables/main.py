# Learn more https://realpython.com/python-variables/
# and https://realpython.com/python-data-types/
import time
from adafruit_circuitplayground.express import cpx

pixels = cpx.pixels
cpx.pixels.brightness = 0.3
pixels.fill((0, 0, 0))
pixels.show()

RED = (255, 0, 0)

while True:
    for i in range(len(pixels)):
        pixels[i] = RED
        time.sleep(.05)
    time.sleep()