input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showString("Jean")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . # # . .
        . . . # .
        . # # . .
        `)
    basic.showString("Baptiste")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
    basic.showString("Jacques")
})
