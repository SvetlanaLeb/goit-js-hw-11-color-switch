const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action= "stop"]'),
    body: document.querySelector('body'),
}

let intervalId = null;
let isActive = false;


refs.start.addEventListener('click', onStartButtonClick);
refs.stop.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    if (isActive) {
        return;
    };
    isActive = true;
    intervalId = setInterval(() => {
        const colorNum = randomIntegerFromInterval(0, colors.length - 1)
        changeBodyColor(colors[colorNum]);
        console.log(colors[colorNum])
    }, 1000)
};

function onStopButtonClick() {
    clearInterval(intervalId);
    isActive = false;
}

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor(color) {
    refs.body.style.backgroundColor = `${color}`
}