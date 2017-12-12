
var formulario = document.getElementById('crear-lista');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  var contenedor = document.createElemet("div");
  var titulo = document.createElement("h2");

  var formularioTarea = document.createElemet("form");
  var nuevaTarea = document.createElemet("imput");
  var btnCrearTarea = document.createElemet("button");

  var nombreLista = document.getElementById('nombre-lista').value;

  titulo.textContent = nombreLista;
  nuevaTarea.type = 'text';
  nuevaTarea.placeholder = 'Nueva tarea';
  btnCrearTarea.textContent = 'Agregar tarea';

  formularioTarea.appendChild(nuevaTarea);
  formularioTarea.appendChild(btnCrearTarea);

  contenedor.appendChild(titulo);
  contenedor.appendChild(formularioTarea);

  document.getElementById('listas').appendChild(contenedor);
});

function ce(elemento) {
  return document.createElement(elemento);
}
