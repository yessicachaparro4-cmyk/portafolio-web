import './style.css'


// ========================================
// BOTONES GUARDAR PROYECTO
// ========================================

const botonesGuardar = document.querySelectorAll('[data-like]')

botonesGuardar.forEach((boton) => {

  boton.addEventListener('click', () => {

    if (boton.classList.contains('btn-success')) {

      boton.textContent = 'Guardar'

      boton.classList.remove('btn-success')

      boton.classList.add('btn-outline-primary')

    } else {

      boton.textContent = 'Guardado ✓'

      boton.classList.remove('btn-outline-primary')

      boton.classList.add('btn-success')

    }

  })

})


// ========================================
// CAMBIO DE TEMA
// ========================================

const botonTema = document.querySelector('#tema')

const temaGuardado = localStorage.getItem('tema')


// Recuperar el tema guardado
if (temaGuardado === 'oscuro') {

  document.body.classList.add('oscuro')

  botonTema.textContent = 'Modo claro'

} else {

  botonTema.textContent = 'Modo oscuro'

}


// Cambiar tema al hacer clic
botonTema.addEventListener('click', () => {

  document.body.classList.toggle('oscuro')

  const temaOscuro =
    document.body.classList.contains('oscuro')


  if (temaOscuro) {

    localStorage.setItem('tema', 'oscuro')

    botonTema.textContent = 'Modo claro'

  } else {

    localStorage.setItem('tema', 'claro')

    botonTema.textContent = 'Modo oscuro'

  }

})