window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.translate(135, 10);//Posición central del canvas...
    //Crear el código necesario para mostrar el logo de Altria
    //El cual consiste en una grilla de 5x5 con diferentes colores.
    //Hacer uso de la función randomColor()
    //Para crear un cuadrado puede hacer uso de la función
    //context.rect(x, y, ancho, alto);

    //logo Altria

      for(var posy=1; posy<6; posy++)
      {
        for(var posx=1; posx<6; posx++)
        {
          context.beginPath();
          context.fillStyle=randomColor();
          context.rect(50*posx, 50*posy, 50, 50);
          context.fill();
          }
        }


    context.fillStyle = "#423465";
    context.font = "50px arial central";
    context.fillText("Altria", 40, 420);

    function randomColor()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };
};
