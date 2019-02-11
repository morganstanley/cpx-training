from adafruit_circuitplayground.express import cpx
import time

cpx.pixels.brightness = 0.3

while True: 
    if cpx.touch_A1:
        cpx.pixels.fill( (255, 0, 0) )
        cpx.pixels.show()
    if cpx.touch_A7:
        cpx.pixels.fill( (0, 0, 0) )
        cpx.pixels.show()
    time.sleep(0.01)
