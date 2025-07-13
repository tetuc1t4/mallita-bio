const malla = [
  { codigo: "MAT101", nombre: "Matemática Básica", ciclo: 1 },
  { codigo: "INF110", nombre: "Introducción a la Programación", ciclo: 1 },
  { codigo: "MAT201", nombre: "Cálculo I", ciclo: 2, prerequisitos: ["MAT101"] },
  { codigo: "INF210", nombre: "Programación II", ciclo: 2, prerequisitos: ["INF110"] }
];

function mostrarMalla() {
  const contenedor = document.getElementById("malla");
  malla.forEach(curso => {
    const div = document.createElement("div");
    div.className = "course";
    div.innerText = curso.codigo;
    div.onclick = () => {
      alert(
        `📖 ${curso.nombre}\n📅 Ciclo: ${curso.ciclo}\n🔗 Prerequisitos: ${curso.prerequisitos ? curso.prerequisitos.join(", ") : "Ninguno"}`
      );
    };
    contenedor.appendChild(div);
  });
}

mostrarMalla();
