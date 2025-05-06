
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setData();

function setData() {
    const now = new Date();
    const getSeconds = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const SecondDegree = (getSeconds / 60) * 360;
    const MinuteDegree = (getMinutes / 60) * 360;
    const HourDegree = (getHours / 12) * 360;

    second.style.transform = `rotate(${SecondDegree}deg)`;
    minute.style.transform = `rotate(${MinuteDegree}deg)`;
    hour.style.transform = `rotate(${HourDegree}deg)`;
}

setInterval(setData, 1000);

