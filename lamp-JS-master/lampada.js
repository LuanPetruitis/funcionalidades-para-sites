const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const body = document.querySelector('body');
const img = document.querySelector('img');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png';
        body.style.backgroundColor = 'rgb(165, 165, 228)';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png';
        body.style.backgroundColor = 'rgb(4, 4, 78)';

    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png';
    body.style.backgroundColor = 'rgb(4, 4, 78)';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);