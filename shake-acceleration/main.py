from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3

while True:
    if cpx.shake(shake_threshold=20):
        x,y,z = cpx.acceleration
        cpx.pixles.fill(( 0, 0, 255 ))
        print("Shake detected!")
        print(x,y,z)