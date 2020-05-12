# Built-in functions

Lets start with [where we left off with variables](https://github.com/mimiflynn/cpx-training/blob/master/Level%202%20-%20Intro%20to%20Programming/1-variables/main.py).

We are using two built-in functions in this script, can you find them?

```python
# Learn more https://realpython.com/python-variables/
# and https://realpython.com/python-data-types/
import time

import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.2)

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

pixels = pixels
pixels.fill(BLACK)
pixels.show()

while True:
    for i in range(len(pixels)):
        pixels[i] = RED
        time.sleep(.05)
    time.sleep(1)

    for i in range(len(pixels)):
        pixels[i] = GREEN
        time.sleep(.05)
    time.sleep(1)

```

## What are built-in functions?

Built-in functions are handy tools built into the Python language (and other languages) that help programmers do common things, like get the length of a list or range of a loop.

### `len(s)`

Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).

### `range(stop)`

Rather than being a function, range is actually an immutable sequence type, as documented in [Ranges and Sequence Types — list, tuple, range](https://docs.python.org/3/library/stdtypes.html#range).

### Documentation

All programmers use references to plan and build their code. The details of the built-in functions above is from documentation.

Feel free to look through and explore the documentation of the built-in functions. You can find all kinds of interesting tools for your projects. Experiment to learn more.

[Built-In Function Reference](https://docs.python.org/3/library/functions.html)
