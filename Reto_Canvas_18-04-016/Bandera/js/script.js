window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    //Para crear las franjas...
    //Crear las 05 Franjas que componen la bandera de Puerto Rico...
    //Las franjas imparares son rojas, las pares son blancas...
    //Rojo: "#ed0000"
    //Blanco: "white"
    //Para crear un rectángulo puede hacer uso de la función
    //context.rect(x, y, ancho, alto);
    //La posición inicial del primer rectángulo es: x = 50, y = 50
    //El ancho recomendado de los rectángulos es de 500
    //El alto recomenado de los rectángulos es de 50

//

  //franjas de la bandera
  var alto=50,
      ancho=500,
      x=50,
      y=50;

  for(var i=1;i<=5;i++){
    context.beginPath();
    var color=(i%2===0)?context.fillStyle = "white":context.fillStyle = "#ed0000";
    context.rect(x, y, ancho, alto);
    context.fill();
    y+=50;
  }

    //Crear el "triángulo" azul
    context.beginPath();
    context.fillStyle = "#0050f0";
    context.moveTo(50, 50);
    context.lineTo(350, 175);
    context.lineTo(50, 300);
    context.strokeStyle = "black";
    context.fill();

    //Para crear la "estrella"...
    context.beginPath();
    context.fillStyle = "white";
    context.moveTo(120, 120);
    context.lineTo(110, 170);
    context.lineTo(70, 170);
    context.lineTo(105, 190);
    context.lineTo(90, 225);
    context.lineTo(120, 200);
    context.lineTo(150, 225);
    context.lineTo(135, 190);
    context.lineTo(165, 170);
    context.lineTo(130, 170);
    context.lineTo(120, 120);
    context.lineWidth = 2;
    context.fill();
};
