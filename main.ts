input.onButtonPressed(Button.A, function () {
    target += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (target))
})
input.onButtonPressed(Button.B, function () {
    target += -1
})
let target = 0
basic.showIcon(IconNames.Heart)
target = 50
basic.forever(function () {
	
})
