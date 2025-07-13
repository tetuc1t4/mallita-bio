fetch('data.json')
  .then(r => r.json())
  .then(malla => {
    const cont = document.getElementById('malla');

    // Cargar estado previo
    const completados = JSON.parse(localStorage.getItem('completados')) || [];

    malla.forEach(curso => {
      const d = document.createElement('div');
      d.className = 'course';
      d.innerText = `${curso.codigo}`;

      // Si ya estaba completado, marca su clase
      if (completados.includes(curso.codigo)) {
        d.classList.add('completed');
      }

      // Click para ver detalles
      d.onclick = () => {
        alert(`📖 ${curso.nombre}\n📅 Ciclo: ${curso.ciclo}`);
      };

      // Doble click para marcar como completado
      d.ondblclick = () => {
        if (d.classList.contains('completed')) {
          d.classList.remove('completed');
          const index = completados.indexOf(curso.codigo);
          if (index !== -1) completados.splice(index, 1);
        } else {
          d.classList.add('completed');
          completados.push(curso.codigo);
        }
        // Guardar en localStorage
        localStorage.setItem('completados', JSON.stringify(completados));
      };

      cont.appendChild(d);
    });
  });
