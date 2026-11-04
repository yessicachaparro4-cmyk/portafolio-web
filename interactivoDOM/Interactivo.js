const lista = document.querySelector("#proyectos");
const boton = document.querySelector("#agregar");

let contador = 1;

boton.addEventListener("click", () => {

  contador++;

  // Crear la columna
  const columna = document.createElement("div");
  columna.classList.add("col-12", "col-md-4");

  // Crear la tarjeta
  const card = document.createElement("div");
  card.classList.add("card", "h-100");

  // Crear el cuerpo de la tarjeta
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Crear título
  const titulo = document.createElement("h2");
  titulo.classList.add("card-title", "h5");
  titulo.textContent = `Proyecto ${contador}`;

  // Crear descripción
  const descripcion = document.createElement("p");
  descripcion.classList.add("card-text");
  descripcion.textContent =
    "Nuevo proyecto agregado dinámicamente con JavaScript.";

  // Crear botón eliminar
  const borrar = document.createElement("button");
  borrar.textContent = "Eliminar";
  borrar.classList.add("btn", "btn-danger");

  // Evento para eliminar la tarjeta
  borrar.addEventListener("click", () => {
    columna.remove();
  });

  // Agregar elementos a la tarjeta
  cardBody.append(titulo);
  cardBody.append(descripcion);
  cardBody.append(borrar);

  card.append(cardBody);

  columna.append(card);

  lista.append(columna);
});