const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + (seconds / 60) * 6 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (
        secondHand.style.transform >= "rotate(449deg)" ||
        secondHand.style.transform <= "rotate(450deg)"
    ) {
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s";
    }
}

setInterval(setDate, 1000);
setDate();