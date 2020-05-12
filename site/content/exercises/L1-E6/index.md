---
template: post
title: Level 1 | Exercise 6 - Temperature
slug: level-1-exercise-6
date: "2020-05-07T23:46:37.121Z"
category: CircuitPython
tags: ["Level 1"]
---

```python
import time
from adafruit_circuitplayground.express import cpx

while True:
    print("Temperature C:", cpx.temperature)
    print("Temperature F:", cpx.temperature * 1.8 + 32)
    print((cpx.temperature, cpx.temperature * 1.8 + 32))
    time.sleep(1)
```
