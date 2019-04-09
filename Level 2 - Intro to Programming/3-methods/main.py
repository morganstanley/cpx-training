# CircuitPlaygroundExpress_NeoPixel
# https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-neopixel

import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))
pixels.show()

# choose which demos to play
# 1 means play, 0 means don't!
simpleCircleDemo = 1
flashDemo = 1
rainbowDemo = 1
rainbowCycleDemo = 1


def wheel(pos):
    # Input a value 0 to 255 to get a color value.
    # The colours are a transition r - g - b - back to r.
    if pos < 85:
        return (int(pos * 3), int(255 - (pos * 3)), 0)
    elif pos < 170:
        pos -= 85
        return (int(255 - (pos * 3)), 0, int(pos * 3))
    else:
        pos -= 170
        return (0, int(pos * 3), int(255 - pos * 3))


def rainbow_cycle(wait):
    for j in range(255):
        for i in range(len(pixels)):
            idx = int((i * 256 / len(pixels)) + j * 10)
            pixels[i] = wheel(idx & 255)
        pixels.show()
        time.sleep(wait)


def rainbow(wait):
    for j in range(255):
        for i in range(len(pixels)):
            idx = int(i + j)
            pixels[i] = wheel(idx & 255)
        pixels.show()
        time.sleep(wait)


def simpleCircle(wait):
    # Colors
    RED = (255, 0, 0)
    PINK = (255, 100, 120)
    ORANGE = (255, 100, 0)
    YELLOW = (255, 255, 0)
    GREEN = (0, 255, 0)
    CYAN = (0, 255, 255)
    PURPLE = (255, 0, 255)
    BLUE = (0, 0, 255)
    LIGHT_BLUE = (80, 200, 175)
    WHITE = (255, 255, 255)

    colors = [
        PINK,
        RED,
        ORANGE,
        YELLOW,
        GREEN,
        CYAN,
        PURPLE,
        BLUE,
        LIGHT_BLUE,
        WHITE
    ]

    for i in range(len(pixels)):
        pixels[i] = colors[i]
        time.sleep(.05)
    time.sleep(1)


while True:
    if simpleCircleDemo:
        print('Simple Circle Demo')
        simpleCircle(.05)

    if flashDemo:  # this will play if flashDemo = 1 up above
        print('Flash Demo')
        pixels.fill((255, 0, 0))
        pixels.show()
        time.sleep(.25)

        pixels.fill((0, 255, 0))
        pixels.show()
        time.sleep(.25)

        pixels.fill((0, 0, 255))
        pixels.show()
        time.sleep(.25)

        pixels.fill((255, 255, 255))
        pixels.show()
        time.sleep(.25)

    if rainbowDemo:
        print('Rainbow Demo')
        rainbow(.001)

    if rainbowCycleDemo:
        print('Rainbow Cycle Demo')
        rainbow_cycle(.001)
