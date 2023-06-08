setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour} &nbsp &nbsp &nbsp  &nbsp:  &nbsp &nbsp &nbsp &nbsp ${min}&nbsp &nbsp &nbsp &nbsp :&nbsp &nbsp &nbsp &nbsp ${sec}&nbsp &nbsp &nbsp&nbsp&nbsp &nbsp &nbsp &nbsp&nbsp&nbsp &nbsp${am_pm}`
    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();



let morningtime = document.getElementById("wakeuptime")
let eveningtime = document.getElementById("naptime")
let para = document.querySelector('#message')
let images = document.querySelector('img')
function checkTime() {
    let time = new Date();
    let hrs = time.getHours();
    console.log(hrs)
    console.log(morningtime.value);

    if (parseInt(morningtime.value) === hrs) {
        para.innerHTML = "Good Morning! Wake up!!"
    }
    else if (parseInt(eveningtime.value) === hrs) {
        para.innerHTML = "Good evening!"
        images.src = "./nap_time.svg"
    }
    else
        para.innerHTML = "Invalid Input"
}
checkTime()


let alarm = document.getElementById("wakeuptime")



