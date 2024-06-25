let url = window.location.href;
let params = new URLSearchParams(url.split('?')[1]);
let countryCode = params.get('codigo');

window.addEventListener('DOMContentLoaded', ()=>{
    consultarPaises();
    formulario?.addEventListener('submit', filtraPais);
});