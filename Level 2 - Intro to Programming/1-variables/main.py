# Learn more https://realpython.com/python-variables/
# and https://realpython.com/python-data-types/
import time
from adafruit_circuitplayground.express import cpx

# Colors
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

pixels = cpx.pixels
cpx.pixels.brightness = 0.3
pixels.fill(BLACK)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = RED
        time.sleep(.05)

    for i in range(len(pixels)):
        pixels[i] = GREEN
        time.sleep(.05)

    time.sleep()
