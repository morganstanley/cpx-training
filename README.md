# cpx-training
Super simple sample programs for [Circuit Playground Express](https://www.adafruit.com/product/3333).

## Development
The names of exercises from the Arduino version of the training have been added as a [project in the github repo page](https://github.com/mimiflynn/cpx-training/projects/1), so select one that interests you and start converting ;)

## References
[Circuit Playground Express CircuitPython guide](https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart)

## Installation Guide
[Windows Driver Installation](https://learn.adafruit.com/adafruit-circuit-playground-express/adafruit2-windows-driver-installation)

[Firmata for Code.org CSD](https://learn.adafruit.com/adafruit-circuit-playground-express/code-org-csd)

[Install or update CircuitPython](https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart)

[Installing Mu Editor](https://learn.adafruit.com/adafruit-circuit-playground-express/installing-mu-editor)

[Download Arduino IDE](https://www.arduino.cc/en/Main/Software)

[Set up Arduino IDE](https://learn.adafruit.com/adafruit-circuit-playground-express/set-up-arduino-ide)

## Notes
1. After connecting your Arduino device to your computer, if no device/drive show up in the File Explorer, try hit the reset button on Arduino device.

2. Disk Drive should have name CIRCUITPY instead of CPLAYBOOT, if CPLAYBOOT is displayed, you need to drag the CPX CircuitPython UF2 file over to the disk drive [UF2 file download link](https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart)

3. Open CIRCUITPY drive, see if there is a folder called "lib". If not, need to download the library bundle and copy the lib folder inside over the CIRCUITPY drive. [Download link](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/tag/20190206)

4. Choose "Adafruit CircuitPython" as Mode when using Mu editor

5. Mu attempts to auto-detect your board, so plug in your CircuitPython device and make sure it shows up as a CIRCUITPY drive before starting Mu

6. Name your Python file as code.py (Available filenames are: code.txt, code.py, main.txt and main.py)

7. To use Circuit Playground Express Library, include the following line at the top
```python
from adafruit_circuitplayground.express import cpx
```
