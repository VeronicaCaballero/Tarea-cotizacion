
// Objeto de acceso a datos
const persistence = new Persistence();

let esNuevo = true;
let indice = -1;


/* MENU */
// selecciona el menú y agrega un evento click con una función que maneja la lógica del menú
$("ul li a").click( function(){

	if( !$(this).hasClass('active') ){

		$("ul li a").toggleClass('active');
		$("#registros").toggle();
		$('#formulario').toggle();

	}

} );


/* FORMULARIO */
// Guardar
$("form").submit( function( evento ){
	evento.preventDefault();

	// objeto contacto
	let contacto = {
		nombre: $("#nombre").val(),
		telefono: $("#telefono").val(),
		email: $("#email").val(),
		direccion: $("#direccion").val()
	};
	 
	// Si la variable esNuevo es true, es por el contactos
	// es un nuevo contacto y entoces se usuara el método
	// para guardar un nuevo contacto.
	// Si la variable esNuevo es false, entonces se le llama
	// al método para modificar el contacto
	if(esNuevo){
		persistence.guardar( contacto );
	} else {
		persistence.modificar( contacto, indice );
	}

	// limpia el formulario
	$('#btnCancelar').click();

	// carga de nuevo toda la tabla
	cargarTabla();

} );


// Modifica el valor de esNuevo a true
$('#btnCancelar').click(function(event) {
	esNuevo = true;
});


// Maneja la edisión de los contactos
// Recibe el botón al que se le hizo click
function editar( btn ){
	esNuevo = false;

	// se recupera el indice del tr en el cual esta el botón
	indice = $(btn).parent().parent().index();

	// se recupera el contactos que se encuetra en ese indice
	let contacto = persistence.recuperarPorIndice( indice );

	// se cargan los datos del contacto en el formulario
	$("#nombre").val( contacto.nombre );
	$("#telefono").val( contacto.telefono );
	$("#email").val( contacto.email );
	$("#direccion").val( contacto.direccion );

	// abre la ventana de registro
	$("#reg").click();
}

// Maneja la eliminación de un contacto
// Recibe el botón que esta sufriendo el clic
function eliminar( btn ){
	// se recupera el indice del tr en el cual esta el botón
	indice = $(btn).parent().parent().index();

	// se llama al método para eliminar y se le pasa el indice
	persistence.eliminar( indice );

	// Se vuelve a cargar toda la tabla
	cargarTabla();
}



/* TABLA */

// Carga todos los datos que hay en el localStroge
// recorriendo el array que es recupera por medio del
// metodo persistence.recuperarTodos()
function cargarTabla(){

	// Elimina todos los items de la tabla, para volver a
	// cargar
	$('#tbContactos tbody').html("");

	// recupera todos los datos en formato de array de objetos
	persistence.recuperarTodos().forEach( function( elem, key ){

		let tmp = `<tr>
                    <th scope="row">${ key }</th>
                    <td>${ elem.nombre }</td>
                    <td>${ elem.telefono }</td>
                    <td>${ elem.email }</td>
                    <td>${ elem.direccion }</td>
                    <td>
                        <button onclick="editar(this)" class="bnt btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Editar">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="eliminar(this)" class="bnt btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Eliminar">
                            <i class="fas fa-eraser"></i>
                        </button>
                    </td>
                </tr>`;

        // agrega cada item recuperado del localStorage
        // al final de la tabla
        $('#tbContactos tbody').append( tmp );
	} );


}

cargarTabla();








