---
template: exercise
title: Tilemaps and Gravity
level: 4
exercise: 5
category: Arcade
tags: ['MakeCode']
---

Act 2 is where the player moves around and interacts with the environment. Non-player characters (NPC's) are introduced, and interactions between the main player and NPC's are programmed.

Use a tilemap to design the player's environment, and use walls to define the boundaries. By default, a sprite can move in any direction on the screen. This is typical for top-down style games, but if you are developing a side-scrolling game and want to add jumping, you will need to program gravity! This involves setting a fixed downward acceleration along the y-axis, and then changing the velocity when the "up" button is pressed. Don't forget to check whether the sprite is standing on a tilemap wall before giving it the velocity boost from jumping, or else your character will be able to fly higher and higher using the "up" button, unless of course that is what you want for your game design!

Here is a short example game demonstrating these principles, letting the player move and jump around on top of "walls":

![code](code.png)

The tilemap defines the walls and uses a dungeon theme:

![tilemap](tilemap.png)
