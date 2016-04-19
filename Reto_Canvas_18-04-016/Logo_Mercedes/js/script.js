window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
        context.shadowColor = "grey";

    //Circulo 1...
    context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 215, 0, Math.PI*2);
    context.fill();
    context.lineWidth = 6;
    context.stroke();


 //Circulo 2...
    context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 200, 0, Math.PI*2);
    context.fill();
    context.lineWidth = 6;
    context.stroke();
    context.fillStyle = "black";

    //logo Mercedes-Benz
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(270, 250);
    context.lineTo(140, 350);
    context.lineTo(300, 300);
    context.lineTo(460, 350);
    context.lineTo(330, 250);
    context.lineTo(300, 50);
    context.strokeStyle = "grey";
    context.stroke();
    context.stroke();
    context.fill();

//------------------------------------
    context.beginPath();
    context.moveTo(300, 50);
    context.shadowBlur = 20;
    context.shadowOffsetY = 3;
    context.shadowOffsetX = 3;
    context.lineTo(300, 300);
    context.lineTo(298, 265);
    context.lineTo(268, 248);
    context.lineTo(470, 355);
    context.lineTo(315, 258);
    context.lineTo(470, 355);
    context.lineTo(318, 256);
    context.lineTo(300, 265);
    context.lineTo(332, 248);
    context.lineTo(135, 355);
    context.lineTo(280, 255);
    context.lineTo(300, 50);
    context.lineTo(282, 256);
    context.lineTo(135, 355);
    context.lineTo(284, 257);
    context.lineTo(300, 50);
    context.lineWidth = 2;
    context.stroke();

    context.font = "65px times new roman";
    context.fillText("Mercedes-Benz", 100, 530);
    //Fin de las líneas Guía...

    //Crear el símbolo de Mercedes-Benz,
    //haciendo uso de lineTo();
    //Para establecer el relleno de la figura se hace uso de context.fill(),
    //Para cambiar el color de relleno se ha ce uso de context.fillStyle = "black";
    //Para dar color a una línea se hace uso de context.strokeStyle = color;
    //Para mostrar la línea se hace uso de context.stroke(), si no se establece, no se moestrará línea...

    
};
