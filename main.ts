input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    koi.koi_addtag(1)
})
input.onGesture(Gesture.Shake, function () {
    flag = 1
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    koi.koi_addtag(2)
})
koi.koi_classified(function (classId) {
    basic.showString("" + (classId))
})
let flag = 0
koi.koi_init(SerialPin.P1, SerialPin.P2)
flag = 0
koi.koi_reset_cls()
basic.forever(function () {
    if (flag) {
        koi.koi_run()
    }
})
