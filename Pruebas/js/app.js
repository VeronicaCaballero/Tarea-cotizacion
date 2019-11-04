$("#miForm").submit(function(ev){
	//cancela el envio de datos al servidor
	//evita que el navegador se recargue
	//el hacer clic en el boton
	ev.preventDefault();
	let valor1= $("#n1").val();
	let valor2= $("#n2").val();

	calcular(valor1, valor2);
});

function calcular(a, b){
	let resultado =parseInt (a) + parseInt (b);
	

	mostrar(resultado);
}
function mostrar(rs){
	$("#resultado").text(rs);
}