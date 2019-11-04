    $("#btnCalcular").click(function(){
     Calcular();
     
 });
 function Calcular(){
     let opcion = $("#moneda option:selected").html();
     let moneda = $("#moneda option:selected").val();
     let monto = $("#monto").val();
     let resultado;
     if(opcion=="Dolar"){

         resultado = parseInt(monto)*parseInt(moneda);
         mostrar(resultado+" U$$");
         console.log(resultado);
         $("#cotizacion").html(moneda+" Gs.");
         $("#monto_ing").html(monto+ " Dolares. ");
      

     } if(opcion=="Real"){

        resultado = parseInt(monto)*parseInt(moneda);
        mostrar(resultado+" R$");
      console.log(resultado);
        $("#cotizacion").html(moneda+" Gs.");
        $("#monto_ing").html(monto+ " Reales. ");
        

    } if(opcion=="Peso"){

        resultado = parseInt(monto)*parseInt(moneda);
        mostrar(resultado+" P$$");
        console.log(resultado);
        $("#cotizacion").html(moneda+" Gs.");
        $("#monto_ing").html(monto+ " Pesos. ");
        

    }
    function mostrar (rs){ 
       $("#resultado").text(rs);
    }
   
 }
