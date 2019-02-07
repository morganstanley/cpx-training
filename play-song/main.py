import math
import time
from adafruit_circuitplayground.express import cpx

def play_song(song_number):
    # 1: Jingle bells
    # 2: Let It Snow

    whole_note = 1.5 
    half_note = whole_note / 2
    quarter_note = whole_note / 4
    dotted_quarter_note = quarter_note * 1.5
    eighth_note = whole_note / 8

    A3 = 220
    Bb3 = 233
    B3 = 247
    C4 = 262
    Db4 = 277
    D4 = 294
    Eb4 = 311
    E4 = 330
    F4 = 349
    Gb4 = 370
    G4 = 392
    Ab4 = 415
    A4 = 440
    Bb4 = 466
    B4 = 494

    if song_number == 1:
        # jingle bells
        jingle_bells_song = [
            [E4, quarter_note],
            [E4, quarter_note],
            [E4, half_note],
            [E4, quarter_note],
            [E4, quarter_note],
            [E4, half_note],
            [E4, quarter_note],
            [G4, quarter_note],
            [C4, dotted_quarter_note],
            [D4, eighth_note],
            [E4, whole_note],
        ]
        for n in range(len(jingle_bells_song)):
            cpx.start_tone(jingle_bells_song[n][0])
            time.sleep(jingle_bells_song[n][1])
            cpx.stop_tone()

    if song_number == 2:
        # Let It Snow
        let_it_snow_song = [
            [B4, dotted_quarter_note],
            [A4, eighth_note],
            [G4, quarter_note],
            [G4, dotted_quarter_note],
            [F4, eighth_note],
            [E4, quarter_note],
            [E4, dotted_quarter_note],
            [D4, eighth_note],
            [C4, whole_note],
        ]

        for n in range(len(let_it_snow_song)):
            cpx.start_tone(let_it_snow_song[n][0])
            time.sleep(let_it_snow_song[n][1])
            cpx.stop_tone()

while True:
    if cpx.switch: 
        play_song(1)
    else:
        play_song(2)