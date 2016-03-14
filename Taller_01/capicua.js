/*Universidad de Cundinamarca Extension Cha 
Ingeniería de sistemas 9 Noche 
Electiva profesional 1
Diego Fernando Angulo Bernal
cod 561212102*/


//Ingresar un numero de minimo 4 digitos como string y decir si es capucua

var numero = prompt ("Ingrese un numero");
var a = "Es capicua";

if (numero.length >= 4)
{
	
for(i=0; i < numero.length/2; i++)
{
	if (numero[i]===numero[numero.length-1-i])
	{
		alert("Es capicua");
	}

	else { alert("No es capicua");}

}

}
else 
{alert("Ingrese un numero de minimo 4 digitos");}


