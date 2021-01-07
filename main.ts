input.onButtonPressed(Button.A, function () {
    GO = 0
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showNumber(Proxi.Lese_LBlock())
    basic.showNumber(Proxi.Lese_RBlock())
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    GO = 1
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
        Proxi.vorwärts()
        if (Proxi.LBlock(25)) {
            Proxi.stehenbleiben()
            Proxi.linksdrehung()
            images.createImage(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `).scrollImage(1, 100)
            Proxi.drehungsstopp()
        } else if (Proxi.RBlock(25)) {
            Proxi.stehenbleiben()
            Proxi.rechtsdrehung()
            images.createImage(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `).scrollImage(1, 100)
            Proxi.stehenbleiben()
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    Proxi.drehungsstopp()
    Proxi.stehenbleiben()
})
