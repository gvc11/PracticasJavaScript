$(function () {

    $("#EjemploTabs").tabs().tabs({

        fx: {

            opacity: "toggle",
            duration: "slow"

        },
        collapsible: true

    });

    $("#acordeon").accordion().accordion({ event: "mouseover" });

    $("#miDialogo").dialog({ autoOpen: false });

    $("#rojo, #verde, #azul").slider({
        value: 0,//Para que empiece donde quieras
        orientation: "horizontal",//Seleccionar la posicion de la barra
        min: 0,
        max: 250,
        slide: cambiaMarcador// Va actualizando el valor mientras mueves, el change lo actualiza una vez que sueltas 




    });

    $("#fecha").datepicker({


        appendText: "d/mm/aaaa", // Escribe un texto al lado del selector
        // minDate: new Date(),  Esto coge el dia de hoy
        // maxDate: "+10", Esto indica que solo se puedan seleccionar hasta 10 dias mas tarde 
        changeMonth: true,// Esto permite cambiar de mes
        changeYear: true, //Esto permite cambiar de año
        yearRange: "-25:+25",// Esto indica el rango de años que quieres mostrar
        showButtonPanel: true,//Esto pone un boton para volver al dia de hoy 
        numberOfMonths: 2,//Esto indica el numero de meses que quieres mostrar a la vez
        dateFormat: "DD/d/mm/yy",//Esto indica en que formato quieres coger la fecha, si pones solo una D abrevia
        closeText: "Cerrar",// Texto boton de cerrar
        currentText: "Hoy",//Texto boton de Hoy
        nextText: "Siguiente",//Para pasar los meses
        prevText: "Anterior", //Para volver a tras en los meses
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],// Asi se le da el nombre a los dias
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],//Asi si las quieres en el calendario
        dayNamesShort: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],//Esto para la abreviatura 
        firstDay: 1, //Esto para que empiece el calendario en lunes
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        //monthNamesMin: ["Ene","Feb", "Mar"...]
    });

    //Esto Autocompleta buscando que la letra que escribes este en las de la lista
    $("#Autocompleta").autocomplete({


        source: ["C++", "Java", "JavaScript", "PHP", "C#", "Cobol"]


    });


    //Este es igual solo que solo mira que empiece en esa letra no que la lleve en cualquier parte.
    var ListaPalabras = ["C++", "Java", "JavaScript", "PHP", "C#", "Cobol"];

    $("#Autocompleta2").autocomplete({


        source: function (peticion, respuesta) {

            var coincide = new RegExp("^" + $.ui.autocomplete.escapeRegex(peticion.term), "i")
            respuesta($.grep(ListaPalabras, function (item) {

                return coincide.test(item);

            }))

        }


    });



    $("#radio").buttonset();
    $("#Button5").button();
    $("#progreso").progressbar({

        value: 66
   });
});

function deshabilita(numeroTab) {

    jQuery(function () {


        $("#EjemploTabs").tabs({ disabled: [numeroTab] });

    });

}

function crear() {

    jQuery(function () {


        $("#EjemploTabs").tabs("add", "", "Nuevo tab");

    });

}

function borrar() {

    jQuery(function () {


        $("#EjemploTabs").tabs("remove", "","");

    });

}


function acordeon() {

    jQuery(function () {


        $("#EjemploTabs").tabs("remove", "", "");

    });

}

function muestraDialogo() {

    jQuery(function () {
        

        $("#miDialogo").dialog({

            autoOpen: true,
            maxHeight: 200,
            maxWidth: 200,
            resizable: false, //Para que no se pueda modificar el tamaño del dialogo
            draggable: false, //Para que no se pueda mover el dialogo por la pantalla
            closedOnEscape: false,//Para que no se cierre el dialogo si pulsas escape 
            closeText: 'Cierra loco',
            modal: true, //Esto resalta el dialogo sobre la pagina
            buttons: {
                OK: function () { $(this).dialog("close"); }
            }


        });
  });

}

function cambiaMarcador() {

    jQuery(function () {

        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = [" rgb (", rojo, ",", verde, ",", azul, ")"].join("");

        $("#cambiaColor").css({
            backgroundColor: cadenaRGB
        });

        $("#deslizador").text(cadenaRGB);//Esto escribe el valor del deslizador
        $("#progreso").progressbar({

            value: rojo
        });

    });

}


