
//funcion para crear una table y en ella crear los botones que van a tener asignados los numeros 
	function comienza_juego()
	{	
		//Mensaje de alerta usando sweet alert, Juego Comienza
		swal({   title: "Vamos a Jugar!",   text: "Suerte!",   timer: 3000,   showConfirmButton: false });
		// Obtener la referencia del elemento body
		var body = document.getElementsByTagName("body");
		// Crea un elemento <table> y un elemento <tbody>
  		var tabla   = document.createElement("table");
  		var tblBody = document.createElement("tbody");
  		// Crea las celdas
  		//Se crean las filas y las columnas
  		for (var i = 0; i < 11; i++)
  		{
  		// Crea las hileras de la tabla
    	var hilera = document.createElement("tr");

    	for (var j = 0; j < 11; j++)
    	{
      		//se crean las columnas con el elemento td, y a esas columnas se les agrega un boton por cada una
      		//con la propiedad document.createTextnote, se insertan los numeros aleatorios de 1 a 121 dentro de los botones
      		var celda = document.createElement("td");
      		var btn = document.createElement("BUTTON");
      		var t = document.createTextNode(Math.round(Math.random()* 121));
      		celda.appendChild(t);
      		hilera.appendChild(celda);
      		//se le agregan los estilos a los botones cuando aparecen 
      		btn.appendChild(t);
      		btn.style.borderRadius = "100px";
      		btn.style.height = "30px";
      		btn.style.backgroundColor = "#E0FFFF";
      		btn.style.border = "solid black";
      		btn.style.fontWeight = "900";
    		document.body.appendChild(btn);

    	}
    	// agrega la hilera al final de la tabla (al final del elemento tblbody)
    	tblBody.appendChild(hilera);
  		}
  		// posiciona el <tbody> debajo del elemento <table>
  		tabla.appendChild(tblBody);

  		if(btn[i][j].clicked == true)
  		{
  			btn.style.backgroundColor="grey";
  		}

	}

	


//En esta funcion se esta creando el contador de tiempo para el juego, con el atributo onload del body
	function cargar()
	{
		
		contador_segundo =0;
		contador_minutos =0;
		//se hace referencia a los elementos del body con el id respectivos que se declaran dentro de la etiqueta p y span
		s = document.getElementById("segundos");
		m = document.getElementById("minutos");
	
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
			s.innerHTML = contador_segundo;
			contador_segundo++;		
		}

		,1000);
	
	}

/*
Para realizar este juego me guie por los siguientes condigos de paginas en internet:
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
http://www.w3schools.com/jsref/met_document_createelement.asp
http://es.wikihow.com/generar-n%C3%BAmeros-aleatorios-en-JavaScript
https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
*/