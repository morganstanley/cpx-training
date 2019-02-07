from adafruit_circuitplayground.express import cpx

while True:
    if cpx.shake(shake_threshold=20):
        x,y,z = cpx.acceleration
        print("Shake detected!")
        print(x,y,z)