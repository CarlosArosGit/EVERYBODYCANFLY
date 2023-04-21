$(document).ready(function () {

    $("#btnPaqueteUno").click(function () {
        $('#paqueteDos').hide();
        $('#paqueteTres').hide();
        $('#paqueteCuatro').hide();
        $('#paqueteCinco').hide();
        $('#paqueteUno').show();
    });
    $("#btnPaqueteDos").click(function () {
        $('#paqueteUno').hide();
        $('#paqueteTres').hide();
        $('#paqueteCuatro').hide();
        $('#paqueteCinco').hide();
        $('#paqueteDos').show();
    });
    $("#btnPaqueteTres").click(function () {
        $('#paqueteDos').hide();
        $('#paqueteUno').hide();
        $('#paqueteCuatro').hide();
        $('#paqueteCinco').hide();
        $('#paqueteTres').show();
    });
    $("#btnPaqueteCuatro").click(function () {
        $('#paqueteUno').hide();
        $('#paqueteTres').hide();
        $('#paqueteDos').hide();
        $('#paqueteCinco').hide();
        $('#paqueteCuatro').show();
    });
    $("#btnPaqueteCinco").click(function () {
        $('#paqueteDos').hide();
        $('#paqueteTres').hide();
        $('#paqueteCuatro').hide();
        $('#paqueteUno').hide();
        $('#paqueteCinco').show();
    }); 
    $("#btnPaqueteUno").dblclick(function () {
        $('#paqueteUno').hide();
    }); 
    $("#btnPaqueteDos").dblclick(function () {
        $('#paqueteDos').hide();
    }); 
    $("#btnPaqueteTres").dblclick(function () {
        $('#paqueteTres').hide();
    }); 
    $("#btnPaqueteCuatro").dblclick(function () {
        $('#paqueteCuatro').hide();
    }); 
    $("#btnPaqueteCinco").dblclick(function () {
        $('#paqueteCinco').hide();
    }); 

    $("#btnEnviarContacto").click(function () {
       var nombre = $('#exampleFormControlInput1').val();
       var apellido = $('#exampleFormControlInput2').val();
       var correo = $('#exampleFormControlInput3').val();
       var texto = $('#exampleFormControlTextarea1').val();
        if(nombre !='' && apellido !='' & correo != '' && texto !=''){
            alert(nombre+' '+apellido+' Gracias por comunicarte con nosotros! te enviaremos una confirmación a tu correo ingresado. ');
        }

    }); 

});