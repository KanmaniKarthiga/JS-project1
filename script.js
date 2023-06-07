// let hours = 0;
// 
//     function startClock(){
//         let time = new Date();
//         let hrs = time.getHours()
//         let mins = time.getMinutes()
//         let secs = time.getSeconds()
//         let AMPM = "AM"
//         if(hrs > 12){
//             hrs -= 12
//             AMPM = "PM"
//         }
//         hours - hrs
//         console.log `${hrs} : ${mins} : ${secs} ${AMPM}`
//     }
//     setInterval(() => {
//         startclock();
//     },1000)
// })

function clock(){
    var hours = document.getElementById('hour')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')
    var AMPM = document.getElementById('ampm')

    let hrs = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()
    
    hours.innerHTML = hrs
    minutes.innerHTML = mins
    seconds.innerHTML = secs
   
}
var interval = setInterval(clock,1000);



let morningtime = document.getElementById("wakeuptime")
let eveningtime = document.getElementById("naptime")
let para = document.querySelector('p')
let images = document.querySelector('img')
function checkTime(){
    let time = new Date();
    let hrs = time.getHours();
    console.log(hrs)
    console.log(morningtime.value);

    if(parseInt(eveningtime.value)=== hrs){
        para.innerHTML = "Good Evening"
        images.src = "./nap_time.svg"
    }
    else if(parseInt(morningtime.value)===hrs)
    {
        para.innerHTML = "Good Morning"
    }
    else
    para.innerHTML = "Invalid Input"
}


