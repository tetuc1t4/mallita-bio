function mostrarInfo(elemento) {
  const activo = document.querySelector('.Ciclo.activo');
  if (activo && activo !== elemento) activo.classList.remove('activo');
  elemento.classList.toggle('activo');
}

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('li input[type=\"checkbox\"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('li').classList.toggle('completado', cb.checked);
    });
  });
});
