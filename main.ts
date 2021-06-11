input.onButtonPressed(Button.A, function () {
    Tool = randint(1, 3)
    // This project is a variation of rock, paper and scissors. It is fun to guess what will come next in this game of elements. 
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
basic.pause(100)
basic.showString("Fire > Ice")
basic.clearScreen()
basic.pause(100)
basic.showString("Water > Fire")
basic.clearScreen()
basic.pause(100)
basic.showString("Water < Ice")
basic.clearScreen()
basic.pause(100)
basic.showString("Ice < Fire")
basic.clearScreen()
basic.pause(100)
basic.showString("Ice > Water")
