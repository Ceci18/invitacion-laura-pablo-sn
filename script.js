// ************* Contador ************* 
// import { countdown } from "./countdown";
const d = document;

function countdown (id,limitDate,finalMessage) { 
    const $countdown = d.getElementById(id);
    console.log($countdown)
    const countdownDate = new Date (limitDate).getTime();
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = countdownDate - now;
        let days = Math.floor(limitTime/86400000);
        let residuo = limitTime % 86400000;
        let hours = Math.floor(residuo/3600000);
        residuo = residuo % 3600000;
        let minutes = Math.floor(residuo/60000);
        residuo = residuo % 60000;
        let seconds = Math.floor(residuo/1000);
        if (id==="countdown-days" && limitTime >= 0) {
            $countdown.innerHTML = `<p>${days}<br>días</p>`;
        }
        if (id==="countdown-hours" && limitTime >= 0) {
            $countdown.innerHTML = `<p>${hours}<br>horas</p>`;
        }
        if (id==="countdown-minutes" && limitTime >= 0) {
            $countdown.innerHTML = `<p>${minutes}<br>minutos</p>`;
        }
        if (id==="countdown-seconds" && limitTime >= 0) {
            $countdown.innerHTML = `<p>${seconds}<br>segundos</p>`;
        }
        if(limitTime < 0 && id==="countdown-days") {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<p> ${finalMessage} </p>`
        };
    },1000);
};

d.addEventListener("DOMContentLoaded", (e) => {
    countdown("countdown-days","December 21, 2024 18:30:00","El evento ya ha finalizado");
    countdown("countdown-hours","December 21, 2024 18:30:00","El evento ya ha finalizado");
    countdown("countdown-minutes","December 21, 2024 18:30:00","El evento ya ha finalizado");
    countdown("countdown-seconds","December 21, 2024 18:30:00","El evento ya ha finalizado");
});

// ************* Nombres************* 

function adjustVisibility() {
    const nameMobile = document.getElementById('name_mobile');
    const nameDesktop = document.getElementById('name_desktop');

    if (window.innerWidth < 800) {
        nameMobile.style.display = 'block';
        nameDesktop.style.display = 'none';
    } else {
        nameMobile.style.display = 'none';
        nameDesktop.style.display = 'block';
    }
}

// Detect when the window is resized
window.addEventListener('resize', adjustVisibility);

// Run when the document is loaded
window.addEventListener('DOMContentLoaded', adjustVisibility);
