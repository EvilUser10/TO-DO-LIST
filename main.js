
const addButton = document.getElementById("botonAdd");
const newTask = document.getElementById("newTask");
const container = document.querySelector(".container");
var cuentaElementos = 0;



addButton.addEventListener("click", () => {
    //Establecemos que no pueda crear un elemento si el campo está vacío.
    if (newTask.value.length != 0) {
        let value = newTask.value //Guardamos el valor del campo
        let newElement = document.createElement('div'); //Creamos un div
        newElement.classList.add("elemento"); //Le asignamos la clase elemento al div
        // Metemos dentro del div el texto, y el botón de basura con su imagen.
        newElement.innerHTML = '<p>' + value + '</p>' + '<span class="basura"><img src="img/basura.png"></span>';
        container.appendChild(newElement);//Metememos el elemento como hijo del container
        newTask.value = "";//Establecemos el input como vacío.
    }

    //El bloque siguiente permite eliminar el elemento.
    const basura = document.querySelectorAll('.basura');
    //Recorremos todos los botones existentes.
    basura.forEach(btn => {
        //Cuando encontremos donde hacemos el click
        btn.addEventListener("click", () => {
            btn.parentNode.remove();//Removemos el padre que es el elemento.
        });
    });
});
