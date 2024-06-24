const lista = document.querySelector('#lista-paises') as HTMLDivElement;
const formulario = document.querySelector('#formulario') as HTMLFormElement;
const pais = document.querySelector('#pais') as HTMLInputElement;

window.addEventListener('DOMContentLoaded', ()=>{
    consultarPaises();
    formulario?.addEventListener('submit', filtraPais);
})

//Funciones
async function consultarPaises(){
    const url = 'https://restcountries.com/v3.1/all';

    fetch (url)
        .then (respuesta => respuesta.json())
        .then (datos => mostrarPaises(datos))
}

function mostrarPaises(paises: any){
    limpiarHTML();

    for(const pais of paises){


        const { name: {common}, flags: {png}, cca3 } = pais;

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');

        tarjeta.innerHTML=`
            <img src="${png}" class="imagen-card">
            <div class="info">
            <h6>${common}</h6>
            <p>${cca3}</p>
            <button class="boton">Ver más</button>
            </div>
        `
        lista.appendChild(tarjeta);
    }
}

function limpiarHTML(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}

function filtraPais(e: Event){
    e.preventDefault();
}