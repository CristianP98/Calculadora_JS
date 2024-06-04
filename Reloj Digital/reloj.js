setInterval(() => {
    // variable para completar el reloj.
    let reloj = document.getElementsByClassName("reloj")[0];
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = tiempoActual.getSeconds();

    // Acompaña el 0 en los numeros del 1 al 9
    if (segundos < 10){
        segundos = `0${segundos}`
    }
    if (minutos < 10){
        minutos = `0${minutos}`
    }
    if (hora < 10){
        hora = `0${hora}`
    }

    // Aparece en pantalla
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
}, 1000);
