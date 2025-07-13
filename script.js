fetch('data.json').then(r=>r.json()).then(malla=>{
  const cont = document.getElementById('malla');
  malla.forEach(c=>{
    const d = document.createElement('div');
    d.className='course';
    d.innerText=`${c.ciclo}. ${c.codigo}`;
    d.onclick=()=>alert(`Curso: ${c.nombre}\nCiclo: ${c.ciclo}`);
    cont.appendChild(d);
  });
});

}

mostrarMalla();
