from adafruit_circuitplayground.express import cpx

while True:
    if cpx.button_a:
        cpx.play_tone(329, 1)
        cpx.play_tone(261, 1)
    elif cpx.button_b:
        cpx.play_tone(440, 1)
        cpx.play_tone(400, 1)
