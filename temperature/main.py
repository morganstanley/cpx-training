from adafruit_circuitplayground.express import cpx
import time

while True:
    temperature_c = cpx.temperature
    temperature_f = temperature_c * 1.8 + 32
    print("Temperature celsius:", temperature_c)
    print("Temperature fahrenheit:", temperature_f)
    time.sleep(1)