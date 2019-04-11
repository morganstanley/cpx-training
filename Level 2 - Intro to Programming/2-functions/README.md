# Functions

Lets start with [where we left off with variables](https://github.com/mimiflynn/cpx-training/blob/master/Level%202%20-%20Intro%20to%20Programming/1-variables/main.py).

```python
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

# Colors
BLACK = (0, 0, 0)
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

pixels.fill(BLACK)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = colors[i]
        time.sleep(.05)
    time.sleep(1)

```

And make a function out of the behavior:

```python
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
```

How to use:
```python
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
        time.sleep(wait)
    time.sleep(1)


while True:
    if simpleCircleDemo:
        print('Simple Circle Demo')
        simpleCircle(.05)
    pixels.fill((0, 0, 0))
```
