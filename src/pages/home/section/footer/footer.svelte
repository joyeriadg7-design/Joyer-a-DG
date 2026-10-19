<script lang="ts">
  import './footer.css';
  import { assetUrl } from '../../../../assets';
  export let pageAttributes: Record<string, string> = {};
  export let pageLinks: string[] = [];
  function configureRoot(node: HTMLElement, config: { attributes: Record<string, string>; links: string[] }) {
    const update = (value: typeof config) => {
      Object.entries(value.attributes).forEach(([name, content]) => node.setAttribute(name, content));
      node.querySelectorAll('a').forEach((link, index) => {
        if (value.links[index] !== undefined) link.setAttribute('href', value.links[index]);
      });
    };
    update(config);
    return { update };
  }
</script>
<footer use:configureRoot={{ attributes: pageAttributes, links: pageLinks }} class="sitio-footer" id="pie-de-pagina">
  <div class="contenedor-footer">
    <!-- Columna 1: Marca -->
    <div class="footer-col">
      <h3 class="footer-brand">Joyería DG</h3>
      <p class="footer-desc">Joyas que resaltan tu estilo y reflejan tu personalidad, con elegancia y calidad en cada detalle.</p>
    </div>

    <!-- Columna 2: Enlaces -->
    <div class="footer-col">
      <h4 class="footer-title">Navegación</h4>
      <ul class="footer-links">
          <li><a href="#heroe" class="footer-link">Inicio</a></li>
          <li><a href="#sobre-nosotros" class="footer-link">Sobre Nosotros</a></li>
          <li><a href="#catalogo" class="footer-link">Catálogo</a></li>
          <li><a href="#contacto" class="footer-link">Contacto</a></li>
      </ul>
    </div>

    <!-- Columna 3: Contacto -->
    <div class="footer-col">
      <h4 class="footer-title">Contacto</h4>
      <ul class="footer-info">
        <li>Email: joyeríaDG@gmail.com</li>
        <li>Teléfono: +57 3145432638</li>
        <li>Ubicación: Montería, Córdoba.</li>
      </ul>
    </div>

    <!-- Columna 4: Horarios y Redes -->
    <div class="footer-col">
      <h4 class="footer-title">Horarios y Redes</h4>
      <ul class="footer-info">
        <li>Lunes a Viernes: 09:00 - 18:00</li>
        <li>Sábados: 10:00 - 14:00</li>
        <li>Instagram: @Joyería DG</li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="contenedor-footer">
      <p class="footer-copyright">© 2026 joyeria-dg-zip</p>
    </div>
  </div>
</footer>