radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(6)
basic.forever(function () {
    if (input.lightLevel() > 180) {
        radio.sendString("Lys av")
    } else {
        radio.sendString("Lys på")
    }
})
