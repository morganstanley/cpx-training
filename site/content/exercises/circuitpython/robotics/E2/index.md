---
template: exercise
title: Color Wheel
level: 1
exercise: 2
category: Robotics
tags: ['CircuitPython']
description: second exercise
---

Technically the Blinky project we created with CircuitPython doesn't do exactly the same thing as the one we previously created with Makecode:

![MakeCode Blink](../../../../images/makecode/blink.png)

Recall our Python code made use of the `cpx.red_led` property, which toggles the small red D13 LED. To light up any of the 10 larger pixels on the CPX device we make use of the `cpx.pixels` property:

```python
from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:

    # notice how these lines are similar
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

    # the [] with a number determines which light to turn on
    # and the numbers in () deterine the color!
    # It says how much (red, green, blue) we want.
    # Try changing the numbers!

    # this line turns on the lights!
    cpx.pixels.show()
```

### Challenge Problem

Change your Blinky code from Exercise 1 to use LED 0 instead of D13. Try having it blink yellow instead of red.

### Reference Documentation

* [cpx.pixels](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.pixels)
