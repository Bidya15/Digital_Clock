function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentDate = now.toDateString();

    document.querySelector(".hours .first .number").textContent = Math.floor(hours / 10);
    document.querySelector(".hours .second .number").textContent = hours % 10;
    document.querySelector(".minutes .first .number").textContent = Math.floor(minutes / 10);
    document.querySelector(".minutes .second .number").textContent = minutes % 10;
    document.querySelector(".seconds .first .number").textContent = Math.floor(seconds / 10);
    document.querySelector(".seconds .second .number").textContent = seconds % 10;
    document.getElementById(".currentDate").textContent = currentDate;
}

setInterval(updateClock, 1000);
updateClock();