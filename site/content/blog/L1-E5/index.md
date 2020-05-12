---
template: post
title: Level 1 Exercise 5 - Acceleration
slug: level-1-exercise-5
date: "2020-05-08T23:46:37.121Z"
category: CircuitPython
tags: ["Level 1"]
---

```python
from adafruit_circuitplayground.express import cpx

# Main loop gets x, y and z axis acceleration, prints the values, and turns on
# red, green and blue, at levels related to the x, y and z values.
while True:
    if cpx.switch:
        print("Slide switch off!")
        cpx.pixels.fill((0, 0, 0))
        continue
    else:
        R = 0
        G = 0
        B = 0
        x, y, z = cpx.acceleration
        print((x, y, z))
        if x:
            R = R + abs(int(x))
        if y:
            G = G + abs(int(y))
        if z:
            B = B + abs(int(z))
        cpx.pixels.fill((R, G, B))
```
