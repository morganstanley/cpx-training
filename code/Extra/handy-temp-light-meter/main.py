from adafruit_circuitplayground.express import cpx
import time
import analogio
import simpleio

pixels = cpx.pixels

pixels.auto_write = False
pixels.brightness = 0.03
pixels.fill((0, 0, 0))
pixels.show()

temperature = cpx.temperature

WHITE = (255, 255, 255)
RED = (255, 0, 0)
PINK = (255, 100, 120)
ORANGE = (255, 100, 0)
YELLOW = (255, 255, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
PURPLE = (255, 0, 255)
BLUE = (0, 0, 255)
LIGHT_BLUE = (80, 200, 175)


def set_pixels():
    pixels[0] = PURPLE
    pixels[1] = BLUE
    pixels[2] = BLUE
    pixels[3] = CYAN
    pixels[4] = LIGHT_BLUE
    pixels[5] = YELLOW
    pixels[6] = ORANGE
    pixels[7] = RED
    pixels[8] = RED
    pixels[9] = RED


while True:
    if cpx.switch:
        temp_c = temperature
        temp_f = temperature * 9 / 5 + 32

        # set pixels to the colors we set in the function above
        set_pixels()

        # temp_f value remapped to pixel position
        peak = simpleio.map_range(temp_f, 0, 100, 0, 9)
        print("Temperature is: %f C and %f F" % (temp_c, temp_f))

        for i in range(0, 10, 1):
            if i >= peak:
                pixels[i] = (0, 0, 0)

        pixels.show()

    else:
        # light value remapped to pixel position
        peak = simpleio.map_range(cpx.light, 0, 320, 0, 10)
        print(cpx.light)
        print(int(peak))

        for i in range(0, 10, 1):
            if i <= peak:
                pixels[i] = (250, 100, 200)
            else:
                pixels[i] = (0, 0, 0)
        pixels.show()

    time.sleep(0.25)
