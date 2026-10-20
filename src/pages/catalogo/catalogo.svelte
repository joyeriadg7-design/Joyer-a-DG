<script lang="ts">
  import './catalogo.css';
  import { assetUrl } from '../../assets';
  import { onMount } from 'svelte';
  import Navbar from '../home/section/navbar/navbar.svelte';
  import Footer from '../home/section/footer/footer.svelte';
  const originalScripts: { attributes: string[][]; content: string }[] = [{"attributes":[],"content":"\n(() => {\n  const navbar = document.body.querySelector('header, nav, .navbar, #navbar, .barra-navegacion');\n  if (!navbar) return;\n  const update = () => {\n    const fixed = getComputedStyle(navbar).position === 'fixed';\n    document.body.style.setProperty('--pagina-navbar-offset', fixed ? Math.max(0, navbar.getBoundingClientRect().bottom) + 'px' : '0px');\n  };\n  update();\n  const observer = new ResizeObserver(update);\n  observer.observe(navbar);\n  window.addEventListener('resize', update);\n  window.addEventListener('load', update, { once: true });\n})();\n"}];
  onMount(() => {
    const previousClass = document.body.className;
    const previousStyle = document.body.getAttribute('style');
    const titleElement = document.head.querySelector('title');
    const previousTitleId = titleElement?.getAttribute('id');
    
    document.body.className = "pagina-catalogo-cuerpo";
    document.body.setAttribute('style', "");
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
      
      document.body.className = previousClass;
      if (previousStyle === null) document.body.removeAttribute('style');
      else document.body.setAttribute('style', previousStyle);
    };
  });
</script>
<svelte:head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Explora nuestros productos • Catálogo Oficial</title>


</svelte:head>


  <!-- 1. Header / Navbar Original del Proyecto (index.html) -->
<Navbar pageAttributes={{"id":"barra-navegacion","class":"navbar"}} pageLinks={["index.html#heroe","index.html#heroe","index.html#sobre-nosotros","index.html#catalogo","index.html#contacto"]} />

  <!-- 2. Área Principal del Catálogo -->
  <main class="seccion-catalogo-externa">
    <section id="catalogo">
      <div class="contenedor-seccion">
        <div class="catalogo-header">
          <span style="color: var(--color-secundario) !important;">Colección Exclusiva</span>
          <h2 style="color: #ffffff !important;">Explora nuestros productos</h2>
          <p style="color: #f9f6f6 !important; display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">Explora nuestra colección completa de artículos.</p>
        </div>
        <div class="catalogo-grid-wrapper">
        <!-- Tarjeta: Singapur 18K. -->
        <div class="card-overlay-hover">
          <div class="card-img-box">
            <img src="https://napoleonejoyas.co/cdn/shop/files/photo_5008047058615118969_y_0b073d3b-4eba-4bd5-aa16-527c822f4879.jpg?v=1689442115" alt="Foto de Singapur 18K." loading="lazy" on:error|once={(event) => { event.currentTarget.setAttribute('src', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'); }}>
          </div>
          <div class="card-badge-flotante">
            <span>$ 550.000</span>
          </div>
          <div class="card-capa-hover">
            <h3>Singapur 18K.</h3>
            <span class="card-precio">$ 550.000</span>
            <p style="display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">Elegante, delicada y con un hermoso brillo. Ideal para complementar cualquier look.</p>
            <a href="detalle.html?titulo=Singapur%2018K.&amp;precio=%24%20550.000&amp;img=https%3A%2F%2Fnapoleonejoyas.co%2Fcdn%2Fshop%2Ffiles%2Fphoto_5008047058615118969_y_0b073d3b-4eba-4bd5-aa16-527c822f4879.jpg%3Fv%3D1689442115&amp;desc=Elegante%2C%20delicada%20y%20con%20un%20hermoso%20brillo.%20Ideal%20para%20complementar%20cualquier%20look." class="card-boton-accion" style="background-color: var(--color-secundario) !important; color: #1e293b !important; text-decoration: none !important;">
              <span style="color: #1e293b !important; font-weight: 600 !important; text-transform: none !important; letter-spacing: normal !important; margin: 0 !important;">Ver detalles</span>
            </a>
          </div>
        </div>

        <!-- Tarjeta: La Cubana. -->
        <div class="card-overlay-hover">
          <div class="card-img-box">
            <img src="https://i.etsystatic.com/30296036/r/il/12f9f5/3819255431/il_1080xN.3819255431_rv5a.jpg" alt="Foto de La Cubana." loading="lazy" on:error|once={(event) => { event.currentTarget.setAttribute('src', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80'); }}>
          </div>
          <div class="card-badge-flotante">
            <span>$ 5.700.000</span>
          </div>
          <div class="card-capa-hover">
            <h3>La Cubana.</h3>
            <span class="card-precio">$ 5.700.000</span>
            <p style="display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">Diseño elegante y robusto, con un acabado brillante que destaca en cualquier ocasión.</p>
            <a href="detalle.html?titulo=La%20Cubana.&amp;precio=%24%205.700.000&amp;img=https%3A%2F%2Fi.etsystatic.com%2F30296036%2Fr%2Fil%2F12f9f5%2F3819255431%2Fil_1080xN.3819255431_rv5a.jpg&amp;desc=Dise%C3%B1o%20elegante%20y%20robusto%2C%20con%20un%20acabado%20brillante%20que%20destaca%20en%20cualquier%20ocasi%C3%B3n." class="card-boton-accion" style="background-color: var(--color-secundario) !important; color: #1e293b !important; text-decoration: none !important;">
              <span style="color: #1e293b !important; font-weight: 600 !important; text-transform: none !important; letter-spacing: normal !important; margin: 0 !important;">Ver detalles</span>
            </a>
          </div>
        </div>

        <!-- Tarjeta: La soga. -->
        <div class="card-overlay-hover">
          <div class="card-img-box">
            <img src="https://dukijoyeria.com/wp-content/uploads/2025/06/Gemini_Generated_Image_uuoup6uuoup6uuou.webp" alt="Foto de La soga." loading="lazy" on:error|once={(event) => { event.currentTarget.setAttribute('src', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'); }}>
          </div>
          <div class="card-badge-flotante">
            <span>$ 3.490.000</span>
          </div>
          <div class="card-capa-hover">
            <h3>La soga.</h3>
            <span class="card-precio">$ 3.490.000</span>
            <p style="display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">Estilo y elegancia que destacan. Diseño clásico y sofisticado, perfecta para lucir todos los días.</p>
            <a href="detalle.html?titulo=La%20soga.&amp;precio=%24%203.490.000&amp;img=https%3A%2F%2Fdukijoyeria.com%2Fwp-content%2Fuploads%2F2025%2F06%2FGemini_Generated_Image_uuoup6uuoup6uuou.webp&amp;desc=Estilo%20y%20elegancia%20que%20destacan.%20Dise%C3%B1o%20cl%C3%A1sico%20y%20sofisticado%2C%20perfecta%20para%20lucir%20todos%20los%20d%C3%ADas." class="card-boton-accion" style="background-color: var(--color-secundario) !important; color: #1e293b !important; text-decoration: none !important;">
              <span style="color: #1e293b !important; font-weight: 600 !important; text-transform: none !important; letter-spacing: normal !important; margin: 0 !important;">Ver detalles</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 3. Footer Original del Proyecto (index.html) -->
<Footer pageAttributes={{"class":"sitio-footer","id":"pie-de-pagina"}} pageLinks={["index.html#heroe","index.html#sobre-nosotros","index.html#catalogo","index.html#contacto"]} />



