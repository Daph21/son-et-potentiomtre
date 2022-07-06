input.onButtonPressed(Button.A, function () {
	
})
let Khz = 0
let Hz = 0
music.setVolume(100)
basic.forever(function () {
    Hz = pins.analogReadPin(AnalogPin.P0) * (5000 / 1023)
    Khz = Hz / 1000
    basic.showNumber(Khz)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    Hz,
    Hz,
    255,
    9,
    3000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
})
