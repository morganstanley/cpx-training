from adafruit_circuitplayground.express import cpx
import time

cpx.pixels.brightness = 0.1

lights_on = False

while True:
    if cpx.shake(shake_threshold=10):
        print("Shake detected!")
        if lights_on:
            lights_on = False

        else:
            lights_on = True

    if lights_on:
        cpx.pixels.fill((150, 0, 150))
    else:
        cpx.pixels.fill((0, 0, 0))

    time.sleep(0.25)
