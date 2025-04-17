const timer = document.querySelector('.container__timer')

let actualTime = 85

function renderTime () {
    let minutes = Math.floor(actualTime / 60);
    let seconds = actualTime % 60;

    timer.innerText = `${minutes}:${seconds}`;
}

const countdown = setInterval(() => {
    actualTime --;
    if (!actualTime) {
        clearInterval(countdown)
    }
    renderTime();
}, 1000)