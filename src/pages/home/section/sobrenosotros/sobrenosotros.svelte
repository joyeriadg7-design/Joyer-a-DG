<script lang="ts">
  import './sobrenosotros.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section id="sobre-nosotros" class="fondo-secundario">

  <div class="cuadricula contenedor-seccion">
    <!-- Aquí va la imagen y debes usar la clase col-span-5 -->
    <div class="col-span-5">
      <!-- Aquí va la imagen solicitada -->
      <div class="contenedor-imagen">
        <img src={assetUrl("imagenes/sobrenosotros-imagen.webp")} alt="Sobre nosotros" class="imagen-estudio">
      </div>
    </div>

    <!-- Aquí va el texto y debes usar la clase col-span-7 -->
    <div class="col-span-7 sobre-contenedor-texto">
      <div class="sobre-nosotros-textos">
        <!-- Redacta aquí tu propio título con h2 y al menos dos párrafos con p -->
      <h2>Sobre nosotros</h2>
      <p>En DG Joyería encontrarás piezas únicas que resaltan tu estilo y personalidad, perfectas para cualquier ocasión. Nos caracterizamos por ofrecer calidad, elegancia y diseños especiales para que cada compra sea una experiencia inolvidable. Ven a conocer nuestra colección y descubre esa joya que hará que cada momento brille aún más. ¡Te esperamos en DG Joyería!</p>
      <p class="descripcion">Además, en DG Joyería buscamos que cada cliente encuentre algo que realmente le encante y se sienta identificado con cada pieza. Ya sea para ti o para sorprender a alguien especial, tenemos opciones para convertir cualquier momento en un recuerdo inolvidable. Porque una joya no es solo un accesorio, es una forma de expresar lo que sientes y quién eres.</p>
      </div>
    </div>
  </div>
<div class="col-sapn-7">
    
</div>
  
</section>
