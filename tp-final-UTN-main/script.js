let video = document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton = document.getElementById("pause");
let muteBoton = document.getElementById("mute");
let progressBar = document.getElementById("progress-bar");
let showTime = document.getElementById("showTime");

video.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
  // Actualizar el valor de la barra de progreso
  progressBar.value = (video.currentTime / video.duration) * 100;

  // Calcular el tiempo restante
let tiempoRestante = video.duration - video.currentTime;

  // Convertir el tiempo restante en minutos y segundos
let minutos = Math.floor(tiempoRestante / 60);
let segundos = Math.floor(tiempoRestante % 60);

  // Mostrar el tiempo restante en el elemento HTML
showTime.innerHTML = `Tiempo restante: ${minutos}:${segundos}`;
}

playBoton.addEventListener('click', () => {
video.play();
});

pauseBoton.addEventListener('click', () => {
video.pause();
flag = false;
});

muteBoton.addEventListener('click', () => {
if (video.muted) {
    video.muted = false;
} else {
    video.muted = true;
}
});
