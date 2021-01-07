input.onButtonPressed(Button.A, function () {
    GO = 1
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    GO = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.pause(200)
    basic.clearScreen()
})
let GO = 0
GO = 0
basic.forever(function () {
    if (GO > 0) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.showNumber(Proxi.Lese_LBlock())
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.showNumber(Proxi.Lese_RBlock())
    }
})
