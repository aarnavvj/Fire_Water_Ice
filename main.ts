input.onButtonPressed(Button.A, function () {
    Tool = randint(1, 3)
    if (Tool == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Tool == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
let Tool = 0
basic.showString("Fire < Water")
basic.clearScreen()
basic.pause(200)
basic.showString("Fire > Ice")
basic.clearScreen()
basic.pause(200)
basic.showString("Water > Fire")
basic.clearScreen()
basic.pause(200)
basic.showString("Water < Ice")
basic.clearScreen()
basic.pause(200)
basic.showString("Ice < Fire")
basic.clearScreen()
basic.pause(200)
basic.showString("Ice > Water")
