---
template: exercise
title: Rainbow Glow
level: 3
exercise: 1
category: ImagiCharm
tags: ['Level 3']
---

Let’s light up the ImagiCharm with a glowing rainbow! Follow the steps below to learn how to make the rainbow glow.

---

### Step 1: Start with a Blank Canvas
First, we need to clear the ImagiCharm's display to make sure it’s ready for the rainbow.

```python
# Create a blank canvas
pixels.clear()
```

- **What This Does**: Clears the screen so nothing is left from before.
- Try running just this line. What happens on the ImagiCharm?

---

### Step 2: Turn on the First Pixel
Let’s start by turning on the top-left pixel with a bright red color.

```python
# Turn on the first pixel
pixels[0][0] = (255, 0, 0)  # Red
```

- **Explanation**:
  - **`pixels[0][0]`**: This picks the first pixel in the top-left corner.
  - **`(255, 0, 0)`**: This means the pixel will glow red (255 for red, 0 for green and blue).

- **Challenge**: Can you change this to green? (Hint: Set the second number to 255.)

---

### Step 3: Add More Colors
Now, let’s turn on more pixels to make a rainbow on the first row.

```python
# Turn on the pixels for a rainbow!
pixels[0][1] = (255, 165, 0)     # Orange
pixels[0][2] = (255, 255, 0)     # Yellow
pixels[0][3] = (0, 255, 0)       # Green
pixels[0][4] = (0, 0, 255)       # Blue
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violet
```

- **Explanation**:
  - Each pixel in the row is assigned a color.
  - The colors of the rainbow are added one by one, using `(red, green, blue)` values.

- **Activity**: Try changing one of the colors. What happens if you mix red and blue?

---

### Step 4: Show the Rainbow
Finally, let’s display the rainbow on the ImagiCharm.

```python
# Show the rainbow on the ImagiCharm!
pixels.show()
```

- **What This Does**: Lights up all the pixels we set!

---

### Full Code
Here’s the complete code to make your glowing rainbow:

```python
# Create a blank canvas
pixels.clear()

# Turn on the pixels for a rainbow!
pixels[0][0] = (255, 0, 0)       # Red
pixels[0][1] = (255, 165, 0)     # Orange
pixels[0][2] = (255, 255, 0)     # Yellow
pixels[0][3] = (0, 255, 0)       # Green
pixels[0][4] = (0, 0, 255)       # Blue
pixels[0][5] = (75, 0, 130)      # Indigo
pixels[0][6] = (238, 130, 238)   # Violet

# Show the rainbow on the ImagiCharm!
pixels.show()
```

---

### Explore More!
- Change the brightness of the pixels.
  *(Hint: Use `pixels.brightness = 0.5` before the `pixels.show()` line.)*
- Create a second row of rainbow colors. What patterns can you make?

Press "Run" to see your rainbow glow! 🌈
