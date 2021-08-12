from adafruit_circuitplayground.express import cpx

cpx.pixels.brightness = 0.3

lights_on = False

while True:
    if lights_on:
        cpx.pixels.fill(( 0, 0, 255 ))
    else:
        cpx.pixels.fill(( 0, 0, 0 ))
            
    if cpx.shake(shake_threshold=30):
        print("Shake detected!")
        if lights_on:
            lights_on = False
            
        else:
            lights_on = True
