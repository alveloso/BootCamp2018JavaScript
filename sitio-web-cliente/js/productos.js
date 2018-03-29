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

	var idBorrar = document.getElementById("idBorrar").value;
	var tabla = document.getElementById("tablaBodyProductos");
	var numRegistros =  tabla.rows.length;
	var flagBorrar =false;

	if(numRegistros == 0){
		alert("Te das cuenta de que estás intentando borrar en una tabla vacía... verdad?");
	}else{
		for(var r = 0; r < numRegistros; r++){
			if(tabla.rows[r].firstChild.innerHTML == idBorrar){
				flagBorrar = true;
				break;
			}
	    }

	    if(flagBorrar){
			tabla.deleteRow(r);
		}else{
			alert("No hay ningún producto con ese id.");
		}
	}
}

function buscarProducto(){
	var idBuscar = document.getElementById("idBuscar").value;
	var tabla = document.getElementById("tablaBodyProductos");
	var numRegistros =  tabla.rows.length;
	var flagBuscar =false;

	if(numRegistros == 0){
		alert("Te das cuenta de que estás intentando buscar en una tabla vacía... verdad?");
	}else{
		for(var r = 0; r < numRegistros; r++){
			if(tabla.rows[r].firstChild.innerHTML == idBuscar){
				flagBuscar = true;
				document.getElementById("idEdita").value = tabla.rows[r].cells[0].innerHTML;
				document.getElementById("nombreEdita").value = tabla.rows[r].cells[1].innerHTML;
				document.getElementById("cantidadEdita").value = tabla.rows[r].cells[2].innerHTML;
				document.getElementById("descripcionEdita").value = tabla.rows[r].cells[3].innerHTML;
				break;
			}
	    }

	    if(flagBuscar){
			document.getElementById("camposModifica").style.display = "block";
			alert("Producto encontrado! Puedes modificarlo más abajo.");
		}else{
			alert("No hay ningún producto con ese id.");
			document.getElementById("camposModifica").style.display = "none";
		}
	}
}

function editarProducto(){

	/*var idEditado = document.getElementById("idEditar").value;
	var nomEditado = document.getElementById("nombreEdita").value;
	var cantEditado = document.getElementById("cantidadEdita").value;
	var descEditado = document.getElementById("descripcionEdita").value;*/

	var idBuscar = document.getElementById("idEdita").value;
	var tabla = document.getElementById("tablaBodyProductos");
	var numRegistros =  tabla.rows.length;
	var flagBuscar =false;

	
	for(var r = 0; r < numRegistros; r++){
		if(tabla.rows[r].firstChild.innerHTML == idBuscar){
			flagBuscar = true;
			tabla.rows[r].cells[1].innerHTML = document.getElementById("nombreEdita").value;
			tabla.rows[r].cells[2].innerHTML = document.getElementById("cantidadEdita").value;
			tabla.rows[r].cells[3].innerHTML = document.getElementById("descripcionEdita").value;
			break;
		}
    }

    alert("Has modificado el producto correctamente");
    document.getElementById("camposModifica").style.display = "none";
    
}

	

function toogleMenu(){

	if(document.getElementById("menuRopciones").style.display == "block"){
		document.getElementById("menuRopciones").style.display = "none";
	}else{
		document.getElementById("menuRopciones").style.display = "block";
	}
}

function mensajeEdita(){
	alert("Por seguridad no se permite editar el identificador");
}

function wip(){
	alert("Seccion en construcción");
}