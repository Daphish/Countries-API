const url = window.location.href;
const params = new URLSearchParams(url.split('?')[1]);
const codigo = params.get('codigo');

window.addEventListener('DOMContentLoaded', ()=>{
    consultarInfo();
});

function consultarInfo(){
    const url = 'https://restcountries.com/v3.1/alpha/'+codigo;

    fetch (url)
        .then (respuesta => respuesta.json())
        .then (datos => mostrarInformacion(datos))
}

function mostrarInformacion(datos : any){
    /* const pais = datos; */

    const {name: {common}, flags: {png}, cca2, ccn3, cca3, cioc, capital, region, subregion, area, population,} = datos;
}