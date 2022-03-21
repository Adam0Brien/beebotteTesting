radio.onReceivedValue(function (name, value) {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, value)
})
let humidity = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
microIoT.initDisplay()
microIoT.microIoT_WIFI("Adams hotspot", "password")
microIoT.microIoT_MQTT(
"hYn5IyqJh7U9lfVdiSvSyJb1",
"ExMVG1hBAbrE0MFpyEwJJGJXAlT6zYwr",
"Motor/data",
microIoT.SERVERS.Global
)
let value = 0
basic.forever(function () {
    humidity = pins.analogReadPin(AnalogPin.P1)
    microIoT.showUserText(0, "humidity:" + humidity)
    microIoT.microIoT_SendMessage(convertToText(humidity), microIoT.TOPIC.topic_0)
})
