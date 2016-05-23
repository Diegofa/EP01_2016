window.onload = function ()
{
	
	  cuadros=0, //identificador de los cuadros de la tabla
		dimension=11,//dimension de la tabla 
		maximo_aleatorios=Math.pow(dimension,2),//cantidad maxima de numeros aleatorios que se van a generar
		numero=0,//numero aleatorio
		aleatorios=[],//array que agurda los numeros aleatorios
		seleccionado=[],
    arrayID =[],//guarda el id de los elementos del juego que ya han sido seleccionados 
		ayudas=0,//numeros de ayudas
		ordenados=[],// Array que ira cargado con  los numeros aleatrios generados 1 por 1 y en orden 
		puntuacion=0,//la puntuacion final acumulada por el jugador
		seg=0,//segundos del croometro
		minutos=0;//minutos del cronometro

  //document.getElementById("fin").style.visibility = "hidden";
  //document.getElementById("ayudas").style.visibility = "hidden";
  //funcion para generar 1 numero aleatorio, lo guarda en la variable numero
	function numAleatorio()
	{
		numero = Math.floor(Math.random()*121)+1;
    //Se imprime el numero aletorio que se genero
		//console.log(numero);
	}

  //Funcion que determina si un numero aleatorio esta repetido, si el numero aleatorio no esta repetido lo guarda en el array aleatorios[]

	function numRepetido()
	{
		var existe= false;
		for (var i = 0; i < aleatorios.length; i++)
		{
			if(numero === aleatorios[i])
			{
        existe=true;
			}

		}
		return existe;
	}

  //Funcion que permite colocar en  el array los numeros aleatorios que no se hallan  repetido

var n_aleatorios = (function n_aleatorios(maximo_aleatorios)
{
	for(var i=0; i < maximo_aleatorios; i++)
	{
      numAleatorio();

      if(!numRepetido())
      	{ aleatorios.push(numero);}
  	   else
  	   	{
  	   		i--;
  	   		numAleatorio();
      	}
    }
    return n_aleatorios;
  })(maximo_aleatorios);

  


  //Funcion para crear el escenario del juego

  var tablero = (function tablero(dimension)
  {

    // Crea un elemento <table> y un elemento <tbody>
    var nID = "";
  	var body    = document.getElementsByTagName("body")[0];
  	var tabla   = document.createElement("table");
  	var tblBody = document.createElement("tbody");
 
 	// Crea las celdas
  	for (var i = 0; i < dimension; i++)
  	{
  		// Crea las hileras de la tabla
    	var hilera = document.createElement("tr");
 		//Crea las columnas de la tabla 
    	for (var j = 0; j < dimension; j++)
    	{
    		// Crea un elemento <td> y un nodo de texto, donde el nodo de texto es el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla
      		nID= j +"_" + i; 
          cuadros++;
      		ordenados.push(cuadros);
          //createElement permite crear un nodo de un elemento
      		var celda = document.createElement("td");
      		var t = document.createTextNode(aleatorios[cuadros-1]);
          var pos =  celda + "-" + nID;
          console.log(pos);
          arrayID.push(pos);
          //appenChild permite agregar un nodo al final del elemento que se creo , Nodo padre td 
      		celda.appendChild(t);
          celda.setAttribute('align', 'center');
      		hilera.appendChild(celda);
          hilera.setAttribute('align', 'center');
  
    	}
    	// agrega la hilera al final de la tabla (al final del elemento tblbody)
   		 tblBody.appendChild(hilera);
       tblBody.setAttribute('align', 'center');
    }
 
  	// posiciona el <tbody> debajo del elemento <table>
  	tabla.appendChild(tblBody);
  	// appends <table> into <body> agregando el elemento al final del ultimo objeto
  	body.appendChild(tabla);
  	// modifica el atributo "border" de la tabla para que sean visibles todos los bordes
    tabla.setAttribute("border", "4");
    tabla.setAttribute('align', 'center');
    // se le asignan atributos de css a la tabla 
    tabla.setAttribute("class", "escenariocss");
    console.log(tabla.arrayID);
  	return tablero;
  	
  })(dimension);
  //Funcion para crear el cronometro del juego   

  function tiempoJuego()
  {
    contador_segundo =0;
	  contador_minutos =0;
	  //se hace referencia a los elementos del body con el id respectivos que se declaran dentro de la etiqueta p y span
	  var s = document.getElementById("segundos");
	  var m = document.getElementById("minutos");
	
	  cronometro=setInterval(function()
      {
        if(contador_segundo==60)
        {
          //si el contador de segundos llega a 60 lo coloca a 0 e incrementa minutos
			    contador_segundo=0;
			    contador_minutos++;
			    //Coloca lo que hay en contador_minutos dentro del elemento minutos del html
			    m.innerHTML = contador_minutos;

			    //Si el contador de minutos llega a 60 lo coloca a 0 
			    if(contador_minutos==60)
			    {contador_minutos=0;}
	      }
		    //Coloca lo que hay en contador_segundos dentro del elemento segundos del html
		    //s.innerHTML = contador_segundo;
		    contador_segundo++;		
	    }

		,1000);	
  }

  tiempoJuego();


  function iniciaJuego()
  {
     document.addEventListener("click", function()
  {
    //document.getElementById("").style.backgroundColor="#dddddd";
  });	

 
  }
  iniciaJuego();

function myFunction(){

alert("You button was pressed");

};
   

}





/*
Para realizar este juego me guie por los siguientes condigos de paginas en internet:
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
http://www.w3schools.com/jsref/met_document_createelement.asp
http://es.wikihow.com/generar-n%C3%BAmeros-aleatorios-en-JavaScript
https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
*/