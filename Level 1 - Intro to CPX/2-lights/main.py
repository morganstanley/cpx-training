from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3
cpx.pixels.fill((0, 0, 0))

while True:
    cpx.pixels[0] = (255, 0, 0)
    cpx.pixels[1] = (255, 127, 0)
    cpx.pixels[2] = (0, 255, 0)
    cpx.pixels[3] = (0, 255, 127)
    cpx.pixels[4] = (75, 0, 130)
    cpx.pixels[5] = (60, 0, 255)
    cpx.pixels[6] = (255, 255, 255)
    cpx.pixels[7] = (0, 100, 0)
    cpx.pixels[8] = (100, 0, 0)
    cpx.pixels[9] = (0, 0, 100)
    cpx.pixels.show()
