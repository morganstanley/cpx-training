# Circuit Playground Temperature
# Reads the on-board temperature sensor and prints the value

import time
import adafruit_thermistor
import board
import neopixel
import analogio
import simpleio

pixels = neopixel.NeoPixel(
    board.NEOPIXEL, 10, brightness=.05, auto_write=False)
pixels.fill((0, 0, 0))
pixels.show()

thermistor = adafruit_thermistor.Thermistor(
    board.TEMPERATURE, 10000, 10000, 25, 3950)

WHITE = (255, 255, 255)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)

def set_pixels():
    pixels[0] = PURPLE
    pixels[1] = BLUE
    pixels[2] = BLUE
    pixels[3] = CYAN
    pixels[4] = LIGHT_BLUE
    pixels[5] = YELLOW
    pixels[6] = ORANGE
    pixels[7] = RED
    pixels[8] = RED
    pixels[9] = RED

while True:
    temp_c = thermistor.temperature
    temp_f = thermistor.temperature * 9 / 5 + 32
    print("Temperature is: %f C and %f F" % (temp_c, temp_f))

    set_pixels()

    # light value remapped to pixel position
    peak = simpleio.map_range(temp_f, 0, 100, 0, 9)

    for i in range(0, 10, 1):
        if i >= peak:
            pixels[i] = (0, 0, 0)

    pixels.show()

    time.sleep(0.25)