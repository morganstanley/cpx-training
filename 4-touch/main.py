# CircuitPlaygroundExpress_CapTouch
# https://circuitpython.readthedocs.io/en/latest/shared-bindings/touchio/__init__.html
import time

import board
import touchio
import neopixel

touch1 = touchio.TouchIn(board.A1)
touch7 = touchio.TouchIn(board.A7)
pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)

while True:
    if touch1.value:
        pixels.fill((255, 0, 0))
        pixels.show()
    if touch7.value:
        pixels.fill((0, 0, 0))
        pixels.show()
    time.sleep(0.01)
