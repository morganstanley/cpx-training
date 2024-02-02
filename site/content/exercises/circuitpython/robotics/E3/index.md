---
template: exercise
title: Sounds
level: 4
exercise: 3
category: Robotics
tags: ['CircuitPython']
---

Let's have a listen to the device's speakers!

Here the first number is the pitch, and the second number is the duration of the note. Play different notes depending on which button is pressed.

```python
from adafruit_circuitplayground import cp

while True:
    if cp.button_a:
        cp.play_tone(329,1)
        cp.play_tone(261,1)
    elif cp.button_b:
        cp.play_tone(440,1)
        cp.play_tone(400,1)
```

### References

- [cp.play_tone](https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.play_tone)
