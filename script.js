// Задание 1
let auto = {
    manufact: "Merc",
    model : "s class",
    year : 2022,
    avgspeed : 50,
};
function displayinfo(auto)
{
    console.log(`Manufacturer: ${auto.manufact}`);
    console.log(`Model: ${auto.model}`);
    console.log(`Year: ${auto.year}`);
    console.log(`Average Speed: ${auto.avgspeed} km/h`);
}
function calculateTravelTime(auto, distance) {
    let hours = distance / auto.avgspeed;
    let resttime = Math.floor(hours / 4);
 
    let totaltime = hours + resttime;
    return totaltime;
}
displayinfo(auto);
console.log(calculateTravelTime(auto, 300));
// Задание 2
let fraction = {
    numerator: 2,
    denominator: 4,
};
function sumFraction(fraction)
{
   
    let newnumerator = fraction.numerator + fraction.numerator;
    console.log(`${newnumerator},  ${fraction.denominator}`);
}
function minusFraction(fraction)
{
    let newnumerator = fraction.numerator - fraction.numerator;
    console.log(`${newnumerator},  ${fraction.denominator}`);
}
function multiplFraction(fraction)
{
    let newnumerator = fraction.numerator * fraction.numerator;
    console.log(`${newnumerator},  ${fraction.denominator}`);
}
function divFraction(fraction)
{
    console.log(`${fraction.numerator},  ${fraction.numerator}`);
}
sumFraction(fraction);
minusFraction(fraction);
multiplFraction(fraction);
divFraction(fraction);
// Задание 3

let time = {
    hours: 14,
    minutes: 30,
    seconds: 10
};
function ChangeTime(time) {
    if (time.seconds >= 60) {
        time.minutes += Math.floor(time.seconds / 60);
        time.seconds = time.seconds % 60;
    } else if (time.seconds < 0) {
        time.minutes += Math.floor(time.seconds / 60) - 1;
        time.seconds = 60 + (time.seconds % 60);
    }

    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes = time.minutes % 60;
    } else if (time.minutes < 0) {
        time.hours += Math.floor(time.minutes / 60) - 1;
        time.minutes = 60 + (time.minutes % 60);
    }

    if (time.hours >= 24) {
        time.hours = time.hours % 24;
    } else if (time.hours < 0) {
        time.hours = 24 + (time.hours % 24);
    }
}

function displayTime(time) {
    console.log(`${time.hours}:${time.minutes}:${time.seconds}`);;
}

function addSeconds(time, seconds) {
    time.seconds += seconds;
    ChangeTime(time);
}

function addMinutes(time, minutes) {
    time.minutes += minutes;
    ChangeTime(time);
}

function addHours(time, hours) {
    time.hours += hours;
    ChangeTime(time);
}

displayTime(time);  

addSeconds(time, 30);
displayTime(time); 

addMinutes(time, 30);
displayTime(time);  

addHours(time, 4);
displayTime(time);  

