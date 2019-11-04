class Persistence{
	/**
	 * Método constructor de la clase.
	 * Aquí se inicializan los atributos de la clase
	 * que seran utilizados en los métodso siguientes
	 */
	constructor(){
		//Array que almacenará todos los datos en formato JSON
		this.contactos = new Array();
		
		// Guarda una referencia del localStorage
		this.db = window.localStorage;
		
		// Se intenta recuperar el item contactos del localStroge si es que ya existe
		// Si no se consigue recupera es por que no existe el itme
		// entonces se crea un item contactos vacio nuevo 
		this.db.contactos = this.db.getItem('contactos') || "[]";
	}

	/**
	 * recupera todos los datos del localStroge
	 * y los devuelve en formato JSON
     *
	 * @return array de objetos con todos los contactos
	 */
    recuperarTodos(){
	
        return JSON.parse( this.db.getItem('contactos') );
	}


	/**
	 * Guarda un contacto en el localStorage.
	 * El método recibe un contacto como parámetro
	 * Se recuperan todos los datos y se carga el nuevo contacto al final 
	 * del array, luego se vuelven a guardar los datos en el localStorage
	 * 
	 * @param  contacto Objeto con los datos del contacto nuevo
	 */
	guardar( contacto ){
		this.contactos = this.recuperarTodos();

		this.contactos.push( contacto );

		this.db.contactos = JSON.stringify( this.contactos );
    }

    /**
     * Recupera un contacto por el indice o posicion correspondiente
     * dentro del array contactos.
     * Para ello un indice es recibido como parámetro, luego
     * se recuperan todos los contactos en formato JSON y se 
     * guardan en el array contactos.
     * Finalmente se retorna el contacto que se encuentra en el indice recibido
     *
     * @param indice valor numerico
     * @return contacto objeto con los datos del contacto
     */
	recuperarPorIndice( indice ){
		this.contactos = this.recuperarTodos();
		return this.contactos[indice];
	}

	/**
	 * Modifica un contacto.
	 * Recibe dos parámetos, un contacto y el indice o posicion dentro del array
	 * Se recuperan los datos en formato JSON y se almacenan en el array contactos
	 * Se cambia el contacto que ya tiene el array contactos en el indice recibido por
	 * el contacto recibido que ya tiene las modificaciones hechas
	 * Se vuelve a convertir el array contactos a string y se guarda en el localStorage
	 *
	 * @param contacto objeto con los datos del contacto
	 * @param indice valor numerico
	 */
	modificar( contacto, indice ){
		this.contactos = this.recuperarTodos();
		this.contactos[indice] = contacto;
		this.db.contactos = JSON.stringify( this.contactos );
	}
        
    /**
     * Elimina un contacto segun su indice.
     * Se recibe un indice como parámetro
     * Primero se recuperan todos los contactos en formato JSON y se almacenan en el 
     * array contactos, luego se utiliza la funcion .splice() de javascript param
     * eliminar del array contactos el contacto que se encuentre en el indice recibido
     * Por ultimo se guarda todo en el localStorage
     *
     * @param indice valor numerico
     */
	eliminar( indice ){
		this.contactos = this.recuperarTodos();
		// elimina un elemento del array utilizan el indice
		this.contactos.splice( indice, 1 );
		this.db.contactos = JSON.stringify( this.contactos );
	}

}
