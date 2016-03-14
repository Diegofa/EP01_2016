/*Universidad de Cundinamarca Extension Cha 
Ingeniería de sistemas 9 Noche 
Electiva profesional 1
Diego Fernando Angulo Bernal
cod 561212102*/

/* Dado un string contar el numero de vocales sin acento que contiene */

 
 var vocales=[["a",0],["e",0],["i",0],["o",0],["u",0]];
 var palabra= prompt ("Ingrese la palabra"); 
  
 for (var i = 0; i < palabra.length; i++) 
 { 	
 	
 	for (var j= 0; j < vocales.length; j++) 
 	{
 		if (palabra.charAt(i) === vocales[j][0])
 		{
 					
 			vocales[j][1]++;
 		}
 			
 	}
 		
 }
 
  for (var i = 0; i < vocales.length; i++)
  {
    if (vocales[i][1] != 0)
    {
      console.log( "Se encontraron : " + vocales[i][0] + " = " + vocales [i][1]);
      alert( "Se encontraron : " + vocales[i][0] + " = " + vocales [i][1]);
    }
  }



