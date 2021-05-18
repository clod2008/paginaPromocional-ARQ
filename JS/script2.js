// Loader



// Centrar imagen div Principal
var barraNeg = document.getElementById("barraNegra");
var barraNegra = barraNeg.clientWidth;
var ancho = barraNegra;
var divPrincipal = document.getElementById("titular");
console.log(divPrincipal.clientWidth);
var divPricipalPx = divPrincipal.clientWidth;
var margenADividir = ancho - divPricipalPx;
var margenFinal = margenADividir / 2;
var alturaFinal = [];
// Alinear Card
var listaDeAlturas = [];
var alturaBarra = barraNeg.clientHeight;
var alturaCard = document.querySelectorAll('#myDIV .card');
function alturaCadaCard () {
    for (i=0; i<alturaCard.length; i++) {

      listaDeAlturas[i] = alturaCard[i].clientHeight;
    }
    //$('#info').css('margin-left',margenFinal);
    

    

  }
    function margenTopCard () {
      for (i=0; i<listaDeAlturas.length; i++) {
        alturaFinal[i] = (alturaBarra-listaDeAlturas[i])/2;
        console.log(alturaFinal);
      }
    }
    function posicionCard () {
      for (i=0; i<alturaFinal.length; i++) {
        $(alturaCard[i]).css("margin-top",alturaFinal[i])
      }

    }

window.onload = function back() {
  // onmousemove es el evento que detecta cada movimiento
  // del cursor sobre lo que abarca el cuerpo de la página
  // el cual nos envía la variable 'e' que contiene clientX
  // y clientY, las coordenadas del cursor
  document.onmousemove = function (e) {
    // la posición se calcula de acuerdo a X, pero
    // se divide entre 10, para que tenga un movimiento
    // más suave con respecto al movimiento real
    // del cursor del mouse. Después se hace negativo,
    // para que este sea en dirección contrario, con una
    // sensación de desplazamiento más que de arrastre.
    var x = -(e.clientX / 5);
    // lo mismo para Y
    var y = -(e.clientY / 5);
    // backgroundPosition son las coordenadas del fondo
    this.body.style.backgroundPosition = x + 'px ' + y + 'px';
    //var algo = document.getElementById('algo');
    //algo.onmousemove = function(e) {
    //    var x = -(e.clientX - this.offsetTop / -10);
    //    var y = -(e.clientY - this.offsetLeft / -10); 
    //    this.style.backgroundPosition = x + 'px ' + y + 'px';
    //};
  };
  $("#myDIV").hide();
    //$("#contenidoUno").hide();
    $("#contenidoBioVer2").hide();
    $("#contenidoTrabajosVer2").hide();
    $("#contenidoContactoVer2").hide();
    $("#contenidoUno").hide();

  $("#loader").delay(1000).fadeOut(500);
  $(":root").css("overflow-y", "auto");

};

// contenidos
var contenidos = document.getElementById("myDIV")
var menuSecundario = document.getElementById("menu2")
var bio = document.getElementById("bioCont")
var trabajos = document.getElementById("trabajosCont")
var contacto = document.getElementById("contactosPpal")
var contenidosWhith
var margeneDelContenido
function crearCajaContenido() {
  contenidosWhith = contenidos.clientWidth;
  console.log(contenidosWhith);
  margeneDelContenido = (contenidosWhith - (contenidosWhith/3))*-1;
  console.log(margeneDelContenido)
}



$(document).ready(function () {
  // coordenadas 
  // $("#info").offset({ left: 1000 });
  $('#info').css('margin-left',margenFinal);
  $(menuSecundario).hide();


  // $("#saberMas").click(function () {
        
  //       $("#info").animate({
  //         "margin-left": "0",
  //         "left": "3em",
  //       }, 500);
  //   $("#contenidoUno").fadeIn(500);
  //   // $("#bioCont").hide();
  //   // $("#trabajosCont").hide();

  //   });



  $("#saberMas").click(function () {

    
      if (barraNegra >= 1024){
          console.log('windows > 1024');
          $("#info").animate({
            "margin-left": "0",
            "left": "3em",
          }, 500);
      } else{
        console.log('windows MENOR 1024');
        $("#info img, #info p ").fadeOut(500);
      }
      // $("#info").animate({
      //     "margin-left": "0",
      //     "left": "3em",
      //   }, 500);

    $("#contenidoUno").fadeIn(500);
    // $("#bioCont").hide();
    // $("#trabajosCont").hide();
    


  });
// botones
  //Bio  botoneraUno

  $("#bioBotoneraUno").click(function (){
    // $("#bio").animate({
    //   "margin-top": "1em",
    // }, 500);
    // crearCajaContenido();
    // $(bio).css("margin-right",margeneDelContenido)
    // $("#trabajo").fadeOut(500);
    // $("#contactosPpal").fadeOut(500);
    // $("#bioCont").fadeIn(500);


    // $("#botondelay").click(function(){
    //     MiColaDeFunciones.delay(5000).fadeOut(1000).delay("fast").fadeIn(1000);
    //     });
    $("#saberMas").fadeOut(500);
    $(menuSecundario).delay(500).fadeIn(500);
    $("#contenidoBioVer2").delay(500).fadeIn(500);
    $("#botoneraUno").fadeOut(500);

  });
  //Trabajos
  $("#trabajoBotoneraUno").click(function (){
    $("#saberMas").fadeOut(500);
    $(menuSecundario).delay(500).fadeIn(500);
    $("#contenidoTrabajosVer2").delay(500).fadeIn(500);
    $("#botoneraUno").fadeOut(500);

  });
  //Contacto
  $("#contactoBotoneraUno").click(function (){
    $("#saberMas").fadeOut(500);
    $(menuSecundario).delay(500).fadeIn(500);
    $("#contenidoContactoVer2").delay(500).fadeIn(500);
    $("#botoneraUno").fadeOut(500);

  });



  //Bio Secundario
    $("#botBio2").click(function(){
        $("#contenidoBioVer2").delay(500).fadeIn(500);
        $("#contenidoTrabajosVer2").fadeOut(500);
        $("#contenidoContactoVer2").fadeOut(500);

    })

  //Trabajo Secundario
  $("#botTrabajo2").click(function(){
    $("#contenidoTrabajosVer2").delay(500).fadeIn(500);
    $("#contenidoBioVer2").fadeOut(500);
    $("#contenidoContactoVer2").fadeOut(500);

  })

  //Contactos Secundario botContacto2
  $("#botContacto2").click(function(){
    $("#contenidoContactoVer2").delay(500).fadeIn(500);
    $("#contenidoBioVer2").fadeOut(500);
    $("#contenidoTrabajosVer2").fadeOut(500);

  })
  
 // Fade In

});
// $("#saberMas").click(function () {
//   $("#myDIV:hidden").first().fadeIn("slow");
// });

$(document).ready(function(){
  
  $("#saberMas").click(function(){
    
    // $("#div1").fadeIn();
    // $("#div2").fadeIn("slow");
    $("#myDIV").fadeIn(500);
    alturaCadaCard();
    margenTopCard ();
    posicionCard ();
    

      });

  });


  

