//Define the variables of hours, minutes, seconds and milliseconds

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let interval;

//Function to start the timer
const start = () => {
  pause();
  interval = setInterval(() => {
    timer();
  });
};

//Function to pause the timer
const pause = () => {
    clearInterval(interval)
};

//Function to reset timer
const restart = () => {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    //To have the numbers reset on the screen we set it manually using the innerText
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
}

//Create the timer function to check the time passed
const timer = () => {
    if ((millisecond += 1) === 1000) { //if the millisecond added to 1 is 1000 then reset millisecond to 0 and increment second by 1
        millisecond = 0
        second++
    }
    if (second === 60) {
        second = 0;
        minute++
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }
    //Print on screen using innerText
    document.getElementById('hours').innerText = returnData(hour);
    document.getElementById('minutes').innerText = returnData(minute);
    document.getElementById('seconds').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
};

//Funtion that makes text on screen more dynamic
const returnData = (input) => {
    return input > 9 ? input : `0${input}` //If input is less than 10, input will concatonate with 0.
};
