let textObject = document.getElementById("MainCountdown");

let finishTime = new Date("2024-04-20T23:00:00");

let celebrated = false;

let CurrentHours;
let CurrentMinutes;
let CurrentSeconds;

let Minute;
let Seconds;
let currentDate;

let Hour;

function updateTime() {
    let currentDate = new Date();
    let distance = finishTime - currentDate;



    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var Hour = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24).toString();
    var Minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var Seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    if (Hour.length == 1) Hour = "0" + Hour;
    if (Minute.length == 1) Minute = "0" + Minute;
    if (Seconds.length == 1) Seconds = "0" + Seconds;

    if (distance < 0) {
        if (!celebrated) celebrate();
        Hour = "00"
        Minute = "00"
        Seconds = "00"
    }

    textObject.innerText = Hour + ":" + Minute + ":" + Seconds;
}

function celebrate() {
    celebrated = true;
    fire(.25, {
        spread: 30,
        startVelocity: 60
    });
    fire(.2, { spread: 60 });
    fire(.35, {
        spread: 100,
        decay: .9,
        scalar: 1
    });
    fire(.1, {
        spread: 130,
        startVelocity: 30,
        decay: .92,
        scalar: 1.2
    });
    fire(.2, {
        spread: 120,
        startVelocity: 45
    })
}

function fire(ratio, opt) {
    confetti(Object.assign({}, opt, {
        origin: { y: .6 },
        particleCount: Math.floor(200 * ratio)
    }))
}

setInterval(updateTime, 1000);

updateTime();

