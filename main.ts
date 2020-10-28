for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
        led.plot(4 - i + j, 4 - j)
    }
    basic.pause(100)
}
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 3 - i; j++) {
        led.plot(j, 3 - i - j)
    }
    basic.pause(100)
}
basic.clearScreen()
basic.forever(function () {
	
})
