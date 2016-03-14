/*Universidad de Cundinamarca Extension Cha 
Ingeniería de sistemas 9 Noche 
Electiva profesional 1
Diego Fernando Angulo Bernal
cod 561212102*/


var a,b,h,ingresarValor,ingresaValor2,resultado;

var opcion= prompt ("Ingrese una opcion:    1-Calcular el radio de un circulo    2-Calcular el area de un triangulo    3-Calcular el area de un cuadrado");
var op= parseInt(opcion);
switch(op){
	case 1:
	if(op===1)
	{
		ingresarValor= prompt ("Ingrese un valor numerico entero para el radio 'en cm' ; no se aceptan caracteres especiales ni numeros  con . o , ");
		a = parseInt(ingresarValor);

		if (ingresarValor != '')
		{

			resultado= Math.PI * (Math.pow (a,2));
			b = resultado.toFixed(3); 
			alert( "El area del Circulo es : " + b + " cm^2 ");
			console.log ( "El area del Circulo es : " + b + "cm^2 "); 
		}

		else
		{ 
			alert("No ingreso el valor del radio");
			console.log ("No ingreso el valor del radio"); 
		}


	} 
	break;

	case 2:
	if (op===2)
	{
		ingresarValor= prompt ("Ingrese la base  (b) 'en m' ; no se aceptan , ");
		a = parseFloat(ingresarValor);
		ingresaValor2 = prompt ("Ingrese la Altura (h) 'en m' ; no se aceptan , ");
		b = parseFloat(ingresaValor2);

		if (ingresarValor != '' && ingresaValor2 != '')
		{

			resultado= a*b/2; 
			alert( "El area del triangulo es  : " + resultado + " m^2 ");
			console.log ( "El area del triangulo es  : " + resultado + " m^2 "); 
		}

		else
		{ 
			alert("No ingreso el valor de  (b) o (h) ");
			console.log ("No ingreso el valor de  (b) o (h) "); 
		}

	}
	break;


	case 3:
	if (op===3)
	{
		ingresarValor= prompt ("Ingrese el valor del lado 'en cm' ; no se aceptan , ");
		a = parseFloat(ingresarValor);
		
		if (ingresarValor != '')
		{

			resultado= Math.pow (a,2); 
			alert( "El area del cuadrado es  : " + resultado + " cm^2 ");
			console.log ( "El area del cuadrado es  : " + resultado + " cm^2 "); 
		}

		else
		{ 
			alert("No ingreso el valor del lado ");
			console.log ("No ingreso el valor del lado"); 
		}

	}
	break;

	
	default: "No ingreso ninguna opcion Valida";
	alert("No ingreso ningun opcion Valida");
	return opcion();

};
 



