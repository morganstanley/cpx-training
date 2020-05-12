---
template: post
title: Level 1 | Exercise 3 - Buttons
slug: level-1-exercise-3
date: "2020-05-10T23:46:37.121Z"
category: CircuitPython
tags: ["Level 1"]
---

```python
import time
import board
import neopixel
import analogio
import simpleio

pixels = neopixel.NeoPixel(
    board.NEOPIXEL, 10, brightness=.05, auto_write=False)
pixels.fill((0, 0, 0))
pixels.show()

light = analogio.AnalogIn(board.LIGHT)

while True:
    # light value remapped to pixel position
    peak = simpleio.map_range(light.value, 2000, 62000, 0, 9)
    print(light.value)
    print(int(peak))

    for i in range(0, 9, 1):
        if i <= peak:
            pixels[i] = (0, 255, 0)
        else:
            pixels[i] = (0, 0, 0)
    pixels.show()

    time.sleep(0.01)
```
