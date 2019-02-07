from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3

while True:
    if cpx.touch_A0: 
        print('Touched pad A0')
        cpx.pixels[5] = 0x003000
    if cpx.touch_A1:
        print('Touched pad A1')
        cpx.pixels[6] = 0x003000
    if cpx.touch_A2:
        print('Touched pad A2')
        cpx.pixels[8] = 0x003000
    if cpx.touch_A3:
        print('Touched pad A3')
        cpx.pixels[9] = 0x003000
    if cpx.touch_A4:
        print('Touched pad A4')
        cpx.pixels[0] = 0x003000
    if cpx.touch_A5:
        print('Touched pad A5')
        cpx.pixels[1] = 0x003000
    if cpx.touch_A6:
        print('Touched pad A6')
        cpx.pixels[3] = 0x003000
    if cpx.touch_A7:
        print('Touched pad A7')
        cpx.pixels[4] = 0x003000
