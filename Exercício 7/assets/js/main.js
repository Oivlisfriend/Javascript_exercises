function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
console.log(criaHoraDosSegundos(10));
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timer;
let segundos = 0;
function inciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}
function pararRelogio() {
    const timer = setTimeout(inciaRelogio, 1000);
}
iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    inciaRelogio();
});
pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});