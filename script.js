var hours = document.getElementById("hours")
var minutes = document.getElementById("mins")
var seconds = document.getElementById("secs")
var AMPM = document.getElementById("ampm")
var time = document.querySelectorAll(".select")
var daytext = document.getElementById("clockmessage")


setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let period = "AM"

    if (hrs === 0) {
        hrs = 12;
    }
    if (hrs >= 12) {
        hrs -= 12;
        period = "PM";
    }
    console.log(`${hrs} : ${mins} : ${secs}`)

hours.innerHTML = hrs
minutes.innerText = mins
seconds.innerText = secs
AMPM.innerText = period

let mor_message = "Grab some healthy breakfast!!!"
let noon_message = "Let's have some lunch!"
let eve_message = "Stop Yawning,Get some tea. It's jus evening!"
let nyt_message = "Close your eyes and Go to sleep"

if (period === "AM" && hrs>=1 && hrs<=12){
    document.getElementById("clockmessage").innerHTML = mor_message
}
else if(period === "PM" && (hrs===12 || (hrs>=1 &&hrs<=3))){
    document.getElementById("clockmessage").innerHTML = noon_message
}
else if(period === "PM" && hrs >=4 && hrs<=7){
    document.getElementById("clockmessage").innerHTML = eve_message
}
else{
    document.getElementById("clockmessage").innerHTML = nyt_message
}

}
showTime();



var morningtime = document.getElementById("wakeuptime")
var lunchtime = document.getElementById("lunchtime")
var eveningtime = document.getElementById("naptime")
var nighttime = document.getElementById("nighttime")


var lefttext = document.getElementById("leftmessage")
function setalarm() {

    let mor_text = "Good Morning!! Wake Up!"
    let noon_text = "Good Afternoon! Take some sleep"
    let eve_text = "Good Evening!!!"
    let nyt_text = "Good night!!!"
    
        let newtime = new Date();
        let hrs = newtime.getHours();
    
        if (parseInt(morningtime.value) === hrs) {
            lefttext.innerHTML = mor_text
            img.src="./Component 30 - 1.svg"
        }
        if (parseInt(lunchtime.value) === hrs) {
            lefttext.innerHTML = noon_text
            img.src = "./lunch_time.svg"
        }
        if (parseInt(eveningtime.value) === hrs) {
            lefttext.innerHTML = eve_text
            img.src = "./nap_time.svg"
        }
        if (parseInt(nighttime.value) === hrs) {
            lefttext.innerHTML = nyt_text
            img.src = "./night time.png"
        }

        
}
setalarm()


let alarm = document.getElementById("wakeuptime")






