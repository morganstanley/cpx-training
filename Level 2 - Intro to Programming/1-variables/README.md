# Variables and Types

## Color Variables
From level 1 exercise 2

```python
from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:
    cpx.pixels[0] = (255, 0, 0)
    cpx.pixels[1] = (255, 127, 0)
    cpx.pixels[2] = (0, 255, 0)
    cpx.pixels[3] = (0, 255, 127)
    cpx.pixels[4] = (75, 0, 130)
    cpx.pixels[5] = (60, 0, 255)
    cpx.pixels[6] = (255, 255, 255)
    cpx.pixels[7] = (0, 100, 0)
    cpx.pixels[8] = (100, 0, 0)
    cpx.pixels[9] = (0, 0, 100)
    cpx.pixels.show()
```

Make a list of color variables by color name.

```python
from adafruit_circuitplayground.express import cpx

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

cpx.pixels.brightness = 0.05
cpx.pixels.fill(BLACK)

while True:
    cpx.pixels[0] = RED
    cpx.pixels[1] = ORANGE
    cpx.pixels[2] = GREEN
    cpx.pixels[3] = CYAN
    cpx.pixels[4] = PURPLE
    cpx.pixels[5] = BLUE
    cpx.pixels[6] = WHITE
    cpx.pixels[7] = YELLOW
    cpx.pixels[8] = PINK
    cpx.pixels[9] = LIGHT_BLUE
    cpx.pixels.show()
```

## Working with lists







Eventually come to this:

```python
# Learn more https://realpython.com/python-variables/
# and https://realpython.com/python-data-types/
import time
from adafruit_circuitplayground.express import cpx

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

pixels = cpx.pixels

pixels.brightness = 0.3
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

How can we streamline this so that we don't have to enter a color for each `for` block?
