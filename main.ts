microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (value) {
    microIoT.showUserText(0, "Data Recieved")
    speed = parseFloat(value)
    microIoT.showUserText(1, convertToText(speed))
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, speed)
})
let speed = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
microIoT.initDisplay()
microIoT.microIoT_WIFI("pbb.ie-2G-8280", "xfpkgqr3")
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
microIoT.microIoT_MQTT(
"hYn5IyqJh7U9lfVdiSvSyJb1",
"ExMVG1hBAbrE0MFpyEwJJGJXAlT6zYwr",
"Motor/Speed",
microIoT.SERVERS.Global
)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
	
})
