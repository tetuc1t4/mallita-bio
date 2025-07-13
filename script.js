fetch('data.json')
  .then(r => r.json())
  .then(malla => {
    const cont = document.getElementById('malla');
    const completados = JSON.parse(localStorage.getItem('completados')) || [];

    malla.forEach(curso => {
      const d = document.createElement('div');
      d.className = 'course';
      d.innerText = `${curso.codigo}`;

      if (completados.includes(curso.codigo)) {
        d.classList.add('completed');
      }

      d.onclick = () => {
        alert(`📖 ${curso.nombre}\n📅 Ciclo: ${curso.ciclo}`);
      };

      d.ondblclick = () => {
        if (d.classList.contains('completed')) {
          d.classList.remove('completed');
          const index = completados.indexOf(curso.codigo);
          if (index !== -1) completados.splice(index, 1);
        } else {
          d.classList.add('completed');
          completados.push(curso.codigo);
        }
        localStorage.setItem('completados', JSON.stringify(completados));
      };

      cont.appendChild(d);
    });
  });