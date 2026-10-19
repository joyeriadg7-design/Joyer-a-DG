<script lang="ts">
  import './catalogo.css';
  import { assetUrl } from '../../../../assets';
  import { onMount } from 'svelte';

  const originalScripts: { attributes: string[][]; content: string }[] = [];
  onMount(() => {
    const previousClass = document.body.className;
    const previousStyle = document.body.getAttribute('style');
    const titleElement = document.head.querySelector('title');
    const previousTitleId = titleElement?.getAttribute('id');
    
    
    const mountedScripts: HTMLScriptElement[] = [];
    let cancelled = false;
    // Re-run the original page scripts after Svelte mounts their original DOM.
    queueMicrotask(async () => {
      for (const original of originalScripts) {
        if (cancelled) break;
        const script = document.createElement('script');
        for (const [name, value] of original.attributes) {
          script.setAttribute(name, name === 'src' ? assetUrl(value) : value);
        }
        script.textContent = original.content.replace(/\b(?:window\.)?location\.search\b/g, '(window.__svelteProductSearch ?? window.location.search)');
        const loaded = script.src ? new Promise<void>((resolve) => {
          script.onload = () => resolve();
          script.onerror = () => resolve();
        }) : Promise.resolve();
        mountedScripts.push(script);
        document.body.appendChild(script);
        await loaded;
      }
    });
    return () => {
      cancelled = true;
      mountedScripts.forEach((script) => script.remove());
      
      
    };
  });
</script>

<section id="catalogo" class="fondo-principal">
  <div class="contenedor-seccion">
    <div class="catalogo-header">
      <span>Colección Exclusiva</span>
    
    
      <h2>Explora nuestros productos</h2>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-bottom: 1.5rem; width: 100%;"><a href="catalogo.html" class="boton-catalogo" style="flex: 0 0 auto !important; width: auto !important; display: inline-flex; padding: 0.65rem 1rem;">Ver catálogo completo</a></div><div class="catalogo-contenido cuadricula">
      <div class="catalogo-item">
        <div class="catalogo-imagen">
          <img src="https://napoleonejoyas.co/cdn/shop/files/photo_5008047058615118969_y_0b073d3b-4eba-4bd5-aa16-527c822f4879.jpg?v=1689442115" alt="Foto de Singapur 18K.">
        </div>
        <div class="item-contenido">
          <div class="informacion-producto">
            <h3>Singapur 18K.</h3>
            <span class="precio-label">$ 550.000</span>
          </div>
          <p class="producto-descripcion">
            Elegante, delicada y con un hermoso brillo. Ideal para complementar cualquier look.
          </p>
          <div class="producto-accion">
            <a href="detalle.html" target="_blank" rel="noopener noreferrer" class="boton-catalogo">Ver detalles</a>
          </div>
        </div>
      </div>

      <div class="catalogo-item">
        <div class="catalogo-imagen">
          <img src="https://i.etsystatic.com/30296036/r/il/12f9f5/3819255431/il_1080xN.3819255431_rv5a.jpg" alt="Foto de La Cubana.">
        </div>
        <div class="item-contenido">
          <div class="informacion-producto">
            <h3>La Cubana.</h3>
            <span class="precio-label">$ 5.700.000</span>
          </div>
          <p class="producto-descripcion">
            Diseño elegante y robusto, con un acabado brillante que destaca en cualquier ocasión. 
          </p>
          <div class="producto-accion">
            <a href="detalle.html" target="_blank" rel="noopener noreferrer" class="boton-catalogo">Ver detalles</a>
          </div>
        </div>
      </div>

      <div class="catalogo-item">
        <div class="catalogo-imagen">
          <img src="https://dukijoyeria.com/wp-content/uploads/2025/06/Gemini_Generated_Image_uuoup6uuoup6uuou.webp" alt="Foto de La soga.">
        </div>
        <div class="item-contenido">
          <div class="informacion-producto">
            <h3>La soga.</h3>
            <span class="precio-label">$ 3.490.000</span>
          </div>
          <p class="producto-descripcion">
            Estilo y elegancia que destacan. Diseño clásico y sofisticado, perfecta para lucir todos los días.   
          </p>
          <div class="producto-accion">
            <a href="detalle.html" target="_blank" rel="noopener noreferrer" class="boton-catalogo">Ver detalles</a>
          </div>
        </div>
      </div>
    </div>
    


  
  </div>
</section>