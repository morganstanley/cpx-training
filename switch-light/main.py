from adafruit_circuitplayground.express import cpx

while True:
    print("Slide switch", cpx.switch)
    if cpx.switch:
        cpx.pixels[4] = 0x003000
    else:
        cpx.pixels[5] = 0x003000