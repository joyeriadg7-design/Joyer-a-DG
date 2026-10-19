<script lang="ts">
  import './heroe.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section class="fondo-principal seccion-heroe" id="heroe">
    <div class=" cuadricula contenedor-seccion contenedor-heroe">
      <div class="col-span-5 contenedor-texto">
        <span class="heroe-etiqueta">DG Joyería · Elegancia atemporal</span>
        <h1>El lujo está en <em>los detalles.</em></h1>
        <p>
          Piezas que hablan de ti. Descubre una colección donde las formas,
          el brillo y cada detalle convierten lo cotidiano en algo extraordinario.
        </p>
        <div class="contenedor-boton">
          <a class="boton boton-secundario" href="#catalogo">Descubrir colección <span aria-hidden="true">↗</span></a>
          <a class="boton boton-blanco" href="#contacto">Contáctanos</a>
        </div>
        <div class="heroe-firma"><span aria-hidden="true">✧</span> Una joya. Una historia. La tuya.</div>
      </div>
      <div class="col-span-7 heroe-imagen-contenedor">
        <img src={assetUrl("imagenes/heroe-imagen.webp")} alt="Selección de joyas de la colección DG Joyería" class="heroe-imagen" fetchpriority="high">
        <div class="heroe-imagen-pie"><span>La belleza de lo esencial</span><span aria-hidden="true">01 / DG</span></div>
      </div>
    </div>
  </section>
