/*ARCHIVO JS*/

/*Clases------------------------------------------------*/
class Producto{
	constructor(idProducto, nombre, cantidad, descripcion){
		this.idProducto = idProducto;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.descripcion = descripcion;
	}
}//fin clase producto

class ColeccionProductos {
	constructor() {
		this.listaProductos = [];
	}

	add(producto){
		this.listaProductos.push(producto);
	}

	remove(producto) {
		for(let i = 0; i < this.listaProductos.length; i++) {

			//Cojo producto segun va corriendo el for
			var c = this.listaProductos[i];

			//Si idProducto que he recibido por parametro
			//es igual al idProducto que he sacado de la lista
			if(c.email === producto.idProducto) {

				// Borro el producto en el que me encuentro
				this.listaProductos.splice(i, 1);

				break;
			}
		}	
	}
}//Fin clase coleccion productos

window.onload=iniciar();
var productos;

function iniciar(){
	//Creo lista donde se irán almacenando los productos
	productos = new ColeccionProductos();
}

/* Fin clases------------------------------------*/

/*Funciones para añadir producto*/
function aniadirProducto(){

	var idNuevoProd = document.getElementById("idProducto").value;
	var nomNuevoProd = document.getElementById("nombreProducto").value;
	var cantNuevoProd = document.getElementById("cantidad").value;
	var descNuevoProd = document.getElementById("descripcion").value;

	//Creo el nuevo producto
	let productoNuevo = new Producto(idNuevoProd,nomNuevoProd,cantNuevoProd,descNuevoProd);

	//Añado el producto
	productos.add(productoNuevo);

	var tableBody = document.querySelector("#tablaBodyProductos");
  	
  	addLineToHTMLTable(productoNuevo, tableBody);
}


// Add a line to the HTML table
function addLineToHTMLTable(producto, referenciaTable) {

    // Add a new row at the end of the table
    var newRow   = referenciaTable.insertRow();

   // add  new cells to the row
   var firstNameCell  = newRow.insertCell();
   firstNameCell.innerHTML = producto.idProducto;

   var lastNameCell   = newRow.insertCell();
   lastNameCell.innerHTML = producto.nombre;

   var lastNameCell   = newRow.insertCell();
   lastNameCell.innerHTML = producto.cantidad;

   var lastNameCell   = newRow.insertCell();
   lastNameCell.innerHTML = producto.descripcion;
}

//Fin de funciones para añadir producto

//Funciones para borrar producto
function borrarProducto(){

	//Recojo id de la fila que quiero borrar del formulario
	var idBorrar = document.getElementById("idBorrar").value;

	//Recojo la tabla para manipularla
	var tabla = document.getElementById("tablaBodyProductos");

	//Saco las filas para ir recorriendola con un for
	var numRegistros =  tabla.rows.length;

	//Bandera parar borrar
	var flagBorrar =false;

	//Si no hay nada en la tabla no tiene sentido buscar
	if(numRegistros == 0){
		alert("Te das cuenta de que estás intentando borrar en una tabla vacía... verdad?");
	}else{

		//Sino empiezo a recorrerla
		for(var r = 0; r < numRegistros; r++){

			//Si encuentro el id cambio la bandera
			if(tabla.rows[r].firstChild.innerHTML == idBorrar){
				flagBorrar = true;

				//Tengo que salir porque si borro durante el recorrido me salta un error en consola
				//Al readaptarse la tabla y seguir con el for
				break;
			}
	    }

	    //Si se confirma que he encontrado el registro borro, sino aviso de que no se ha encontrado
	    if(flagBorrar){
			tabla.deleteRow(r);
		}else{
			alert("No hay ningún producto con ese id.");
		}
	}
}

//Antes de editar debo buscar el registro que quiero cambiar
function buscarProducto(){

	//Saco el id que quiero buscar
	var idBuscar = document.getElementById("idBuscar").value;

	//Recojo la tabla para manipularla
	var tabla = document.getElementById("tablaBodyProductos");

	//Saco filas para recorrer con un for
	var numRegistros =  tabla.rows.length;

	//Bandera que uso para hacer visibles los campos de edicion
	var flagBuscar =false;

	//Si la tabla está vacia no tiene sentido buscar
	if(numRegistros == 0){
		alert("Te das cuenta de que estás intentando buscar en una tabla vacía... verdad?");
	}else{

		//Sino recorro la tabla
		for(var r = 0; r < numRegistros; r++){

			//Si he encontrado registro muestro los datos de ese registro
			//en los campos donde voy a dejar que se modifique
			if(tabla.rows[r].firstChild.innerHTML == idBuscar){
				flagBuscar = true;
				document.getElementById("idEdita").value = tabla.rows[r].cells[0].innerHTML;
				document.getElementById("nombreEdita").value = tabla.rows[r].cells[1].innerHTML;
				document.getElementById("cantidadEdita").value = tabla.rows[r].cells[2].innerHTML;
				document.getElementById("descripcionEdita").value = tabla.rows[r].cells[3].innerHTML;
				break;
			}
	    }

	    //Si he encontrado registro, dejo visble los campos donde modificarlo
	    if(flagBuscar){
			document.getElementById("camposModifica").style.display = "block";
			alert("Producto encontrado! Puedes modificarlo más abajo.");
		}else{
			alert("No hay ningún producto con ese id.");

			//Por seguridad si has realizado una busqueda antes y tienes activados los campos y la siguiente
			//busqueda que haces no tiene exito.
			document.getElementById("camposModifica").style.display = "none";
		}
	}
}

function editarProducto(){

	//Saco el id del registro que quiero editar
	var idBuscar = document.getElementById("idEdita").value;

	//Recojo la tabla para manipularla
	var tabla = document.getElementById("tablaBodyProductos");

	//Saco filas para recorrer con un for
	var numRegistros =  tabla.rows.length;

	//aqui no hace falta verificar filas porque ya se ha buscado anteriormente el registro a editar
	for(var r = 0; r < numRegistros; r++){

		//Estando situados en la fila cambiamos la bandera
		if(tabla.rows[r].firstChild.innerHTML == idBuscar){

			//Cambio las celdas correspondientes menos el id que por seguridad no se deja cambiar
			tabla.rows[r].cells[1].innerHTML = document.getElementById("nombreEdita").value;
			tabla.rows[r].cells[2].innerHTML = document.getElementById("cantidadEdita").value;
			tabla.rows[r].cells[3].innerHTML = document.getElementById("descripcionEdita").value;
			break;
		}
    }

    //Aviso de exito y oculto los campos de modificacion
    alert("Has modificado el producto correctamente");
    document.getElementById("camposModifica").style.display = "none";
    
}

//Funcion para ocultar y mostrar el menu reducido
function toogleMenu(){

	if(document.getElementById("menuRopciones").style.display == "block"){
		document.getElementById("menuRopciones").style.display = "none";
	}else{
		document.getElementById("menuRopciones").style.display = "block";
	}
}

//Mensaje de advertencia si se toca el campo de id de la edicion (en el caso de
//que se pudiera tocar esta protegido con readonly)
function mensajeEdita(){
	alert("Por seguridad no se permite editar el identificador");
}

//Mensaje si se tocan otras opciones del nav
function wip(){
	alert("Seccion en construcción");
}