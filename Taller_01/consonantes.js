/*Universidad de Cundinamarca Extension Cha 
Ingeniería de sistemas 9 Noche 
Electiva profesional 1
Diego Fernando Angulo Bernal
cod 561212102*/

/* Dado un string contar el numero de consonantes que contiene */

 
 var consonante =	[["b",0],["c",0],["d",0],["f",0],["g",0],
            		["h",0], ["j",0], ["k",0], ["l",0], ["m",0],
           			["n",0],["ñ",0], ["p",0], ["q",0], ["r",0],
            		["s",0], ["t",0], ["v",0], ["w",0], ["x",0]
            		["y",0], ["z",0]];

 var palabra= prompt ("Ingrese la palabra");

for (var i = 0; i < consonante.length; i++)
{
  for (var j = 0; j < palabra.length; j++)
   {
    if (palabra.charAt(j) === consonante[i][0])
    {
        consonante[i][1]++;
    }
  }
}

 

for (var h = 0; h < consonante.length; h++)
{
  if (consonante [h][1]!=0)
  {
      console.log( "Se encontraron : " + consonante[h][0] + " = " + consonante[h][1] );
      alert( "Se encontraron : " + consonante[h][0] + " = " + consonante[h][1] );
  }
} 


  for (var m = 0; i < consonate.length; i++)
  {
    if (consonante[i][1] != 0)
    {
      console.log( "Se encontraron : " + consonante[i][0] + " = " + consonante [i][1]);
      alert( "Se encontraron : " + consonante[i][0] + " = " + consonante [i][1]);
    }
  }