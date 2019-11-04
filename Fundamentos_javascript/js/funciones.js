

function table(){
	let numero= prompt("Ingrese el numero a multiplar");

	for (let  x = 0 ; x <= 10 ; x++ ){
        let mult = numero * x;


        let msj= numero+ " x " + x + " = " + mult;

        console.log (msj);
	}
}



table();