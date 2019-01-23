# CircuitPlaygroundExpress_NeoPixel
# https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/neopixels
import board
import neopixel

pixels = neopixel.NeoPixel(board.NEOPIXEL, 10, brightness=.1)
pixels.fill((0, 0, 0))

while True:
    pixels[0] = (255, 0, 0)
    pixels[1] = (255, 127, 0)
    pixels[2] = (0, 255, 0)
    pixels[3] = (0, 255, 127)
    pixels[4] = (75, 0, 130)
    pixels[5] = (60, 0, 255)
    pixels[6] = (255, 255, 255)
    pixels[7] = (0, 100, 0)
    pixels[8] = (100, 0, 0)
    pixels[9] = (0, 0, 100)
    pixels.show()
