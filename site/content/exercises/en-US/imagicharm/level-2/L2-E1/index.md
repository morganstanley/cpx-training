---
template: exercise
title: Moving Pixels
level: 2
exercise: 1
category: ImagiCharm
tags: ['Level 2']
---

### Moving Pixels Lesson

This lesson teaches you how to create a pixel that moves across the ImagiCharm and bounces back when it reaches the edges.

---

### Full Code: Moving and Bouncing Pixel

Copy and paste the code below into your ImagiCharm to see the moving and bouncing pixel in action!

```python
import time

# Make the pixel bounce in the first row
direction = 1  # 1 for moving right, -1 for moving left
position = 0  # Start at the first column

while True:
    pixels.clear()  # Clear the display
    pixels[0][position] = (0, 255, 0)  # Green pixel
    pixels.show()  # Update the ImagiCharm display
    time.sleep(0.3)  # Pause to make movement visible

    # Update the position
    position += direction

    # Reverse direction if the pixel reaches the edges
    if position == 7 or position == 0:
        direction *= -1
