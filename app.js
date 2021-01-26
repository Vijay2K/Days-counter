const newYear = "1 Jan 2022";
const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minutesText = document.querySelector("#mins");
const secsText = document.querySelector("#secs");

const countDown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60 % 60);
    const secs = Math.floor(totalSeconds % 60);

    daysText.innerText = days;
    hoursText.innerText = hours;
    minutesText.innerText = minutes;
    secsText.innerText = secs;
} 

setInterval(countDown, 1000);


