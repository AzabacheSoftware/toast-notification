import './public/style.css'

document.querySelector('#app').innerHTML = `
<div class="contenedor">
<div class="hero">
  <h1 class="titulo">Azabache Software</h1>
  <p class="parrafo"><b>Notificaciones Toast</b></p>
  <img class="imagen" src="/imagen.png" alt=""/>
  <div class="contenedor-botones" id="contenedor-botones">
    
    <button class="btn exito" data-tipo="exito">Exito</button>
    <button class="btn error" data-tipo="error">Error</button>
    <button class="btn info" data-tipo="info">Info</button>
    <button class="btn warning" data-tipo="warning">Warning</button>
  </div>
</div>

<div class="contenedor-toast" id="contenedor-toast">
</div>
</div>
`


