import type { Pais } from './types.ts';

const titulo = document.querySelector('#titulo') as HTMLHeadingElement;
const imagen = document.querySelector('.container2') as HTMLDivElement;
const tablas = document.querySelector('#tablas') as HTMLDivElement;
const lenguajes = document.querySelector('#lenguajes') as HTMLTableSectionElement;

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

function mostrarInformacion(datos : Pais[]){
    /* const pais = datos; */
    const { name: { common, official }, flags: { png }, cca2, ccn3, cca3, capital, region, subregion, area, population, languages } = datos[0];


    titulo.textContent = common; 
    imagen.style.backgroundImage = `url(${png})`;

    const cuadro = document.createElement('div');
    cuadro.classList.add('cuadro');
    cuadro.innerHTML=`
        <h2>Nombres</h2>
        <table>
          <tbody>
            <tr>
              <td><h5><strong>Común</strong></h5></td>
              <td><h5>${common}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>Oficial</strong></h5></td>
              <td><h5>${official}</h5></td>
            </tr>
          </tbody>
        </table>
    `

    const cuadro2 = document.createElement('div');
    cuadro2.classList.add('cuadro');
    cuadro2.innerHTML=`
        <h2>Códigos</h2>
        <table>
          <tbody>
            <tr>
              <td><h5><strong>ISO 3166-1 alpha-2</strong></h5></td>
              <td><h5>${cca2}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>ISO 3166-1 alpha-3</strong></h5></td>
              <td><h5>${cca3}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>ISO 3166-1 numeric</strong></h5></td>
              <td><h5>${ccn3}</h5></td>
            </tr>
          </tbody>
        </table>
    `

    const cuadro3 = document.createElement('div');
    cuadro3.classList.add('cuadro');
    cuadro3.innerHTML=`
        <h2>Geografía</h2>
        <table>
          <tbody>
            <tr>
              <td><h5><strong>Capital</strong></h5></td>
              <td><h5>${capital}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>Region</strong></h5></td>
              <td><h5>${region}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>Subregion</strong></h5></td>
              <td><h5>${subregion}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>Área</strong></h5></td>
              <td><h5>${area}</h5></td>
            </tr>
            <tr>
              <td><h5><strong>Población</strong></h5></td>
              <td><h5>${population}</h5></td>
            </tr>
          </tbody>
        </table>
    `

    for(let entry of Object.entries(languages)){
        const leng = document.createElement('tr')
        leng.innerHTML=`
            <td><h5><strong>${entry[0]}</strong></h5></td>
            <td><h5>${entry[1]}</h5></td>
        `
        lenguajes.appendChild(leng);
    }

    tablas.appendChild(cuadro);
    tablas.appendChild(cuadro2);
    tablas.appendChild(cuadro3);
}