---
template: exercise
title: Buttons
level: 1
exercise: 3
category: Robotics
tags: ['CircuitPython']
description: third exercise
---

Now let's use the buttons on the CPX device to turn individual LEDs on and off. We can use the `cpx.button_a` and `cpx.button_b` properties to determine whether the given button is currently pressed down or not:

```python
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.button_a:
        cpx.pixels[0] = (255, 255, 255)
    elif cpx.button_b:
        cpx.pixels[1] = (255, 255, 255)
```

### Challenge Problem 1

Modify the code above so that only one pixel is on at a time. In other words, if multiple buttons are pressed in a sequence, only the most recent pixel stays on.

*Hint: consider using `cpx.pixels.fill`*

### Challenge Problem 2

Now modify the code so that each pixel is lit only while the user is holding down the button. As soon as the button is released, all pixels should turn off.

### Reference Documentation

* [cpx.button_a](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_a)

* [cpx.button_b](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.button_b)
