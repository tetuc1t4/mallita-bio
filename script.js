function mostrarInfo(elemento) {
  const activo = document.querySelector('.Ciclo.activo');
  if (activo && activo !== elemento) activo.classList.remove('activo');
  elemento.classList.toggle('activo');
}
