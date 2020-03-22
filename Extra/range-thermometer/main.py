import time
import adafruit_thermistor
import board
import neopixel
import analogio
import simpleio

pixels = neopixel.NeoPixel(
    board.NEOPIXEL, 10, brightness=.05, auto_write=False)
pixels.fill((0, 0, 0))
pixels.show()

thermistor = adafruit_thermistor.Thermistor(
    board.TEMPERATURE, 10000, 10000, 25, 3950)

while True:
    temp_c = thermistor.temperature
    temp_f = thermistor.temperature * 9 / 5 + 32
    print("Temperature is: %f C and %f F" % (temp_c, temp_f))

    # light value remapped to pixel position
    peak = simpleio.map_range(temp_f, 0, 100, 0, 9)

    for i in range(0, 9, 1):
        if i <= peak:
            pixels[i] = (255, 0, 0)
        else:
            pixels[i] = (0, 0, 0)
    pixels.show()

    time.sleep(0.25)
