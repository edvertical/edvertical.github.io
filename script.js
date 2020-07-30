const p = document.querySelector('.teks');
const text = document.createTextNode(new Date().getFullYear() + ' / MAKNALOGO');
p.appendChild(text);



const animate = document.querySelector('.fancy');
const strText = animate.textContent;
const splitText = strText.split('');
animate.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    animate.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = animate.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

const animasi = document.querySelector('.fanci');
const strTeks = animasi.textContent;
const splitTeks = strTeks.split("");
animasi.textContent = "";

for (let j = 0; j < splitTeks.length; j++) {
    animasi.innerHTML += "<span>" + splitTeks[j] + "</span>";
}

let kar = 0;
let time = setInterval(onYick, 50);

function onYick() {
    const spam = animasi.querySelectorAll('span')[kar];
    spam.classList.add('fade');
    kar++;
    if (kar === splitTeks.length) {
        komplete();
        return;
    }
}

function komplete() {
    clearInterval(time);
    time = null;
}

