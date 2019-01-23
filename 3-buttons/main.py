# https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/play-tone
# https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/buttons
from adafruit_circuitplayground.express import cpx

while True:
    if cpx.button_a:
        cpx.play_tone(329.63, 1)
        cpx.play_tone(261.63, 1)
    elif cpx.button_b:
        cpx.play_tone(440.00, 1)
        cpx.play_tone(415.30, 1)
