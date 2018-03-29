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

	document.getElementById("myTable").deleteRow(0); 
}

function toogleMenu(){

	if(document.getElementById("menuRopciones").style.display == "block"){
		document.getElementById("menuRopciones").style.display = "none";
	}else{
		document.getElementById("menuRopciones").style.display = "block";
	}
}
