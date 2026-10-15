async function cargarPaletas() {
  const botones = document.querySelectorAll('[data-palette]');
  try {
    const respuesta = await fetch('./paletas.json');
    if (!respuesta.ok) throw new Error('No se pudieron cargar las paletas');
    const paletas = await respuesta.json();

    function aplicarPaleta(nombre) {
      const variables = paletas[nombre];
      if (!variables) return;
      Object.entries(variables).forEach(([variable, valor]) => {
        document.documentElement.style.setProperty(variable, valor);
      });
      botones.forEach(boton => {
        boton.setAttribute('aria-pressed', String(boton.dataset.palette === nombre));
      });
    }

    botones.forEach(boton => {
      boton.addEventListener('click', () => aplicarPaleta(boton.dataset.palette));
    });
    aplicarPaleta('predeterminada');
  } catch (error) {
    console.error(error);
    botones.forEach(boton => { boton.disabled = true; });
    const aviso = document.querySelector('.dg-preview > span');
    if (aviso) {
      aviso.textContent = 'No se pudieron cargar las paletas. Recarga la página.';
      aviso.setAttribute('role', 'alert');
    }
  }
}

cargarPaletas();
