var stmints = 0;
var stseconds = 0;
var stzecsec = 0;
var iniciar = 1;
var hints = 1;

// function to be executed when the chronometer stops
function toAutoStop() {
	alert('Your life goes on');
}

// the initial tenths-of-second, seconds, and minutes
var zecsec = 0;
var seconds = 0;
var mints = 0;

var startchron = 0;

$(function(){
	
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
          //console.log(pos);
          arrayID.push(pos);
          //appenChild permite agregar un nodo al final del elemento que se creo , Nodo padre td 
      		celda.appendChild(t);
          celda.setAttribute('align', 'center');
          celda.className="cuadrado"
          celda.setAttribute("id", aleatorios[cuadros-1]);
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
   // console.log(tabla.arrayID);
  	return tablero;
  	
  })(dimension);
  //Funcion para crear el cronometro del juego   


	$(".cuadrado").on('click', function () {
		validate_number(this);
	})
	$("#ayudas").on('click', function () {
		if(hints < 4){
		//prueba = $(".escenariocss").find("tr").attr("id", 122);
		$('#'+iniciar).addClass("intro");
		iniciar++;
		hints++;
		}else{
			alert("no te quedan mas ayudas");
		}
	})



});


// Inicio de funciones



function validate_number(casilla)
{
	if(iniciar == casilla.id){
		$(casilla).addClass("intro");
		iniciar ++;
		console.log(iniciar);
	}

}


function myFunction(){

	alert("You button was pressed");

};
//Funcion cronometro tomado de http://jsfiddle.net/JRD06/gqf69wx4/
$(function(){
	$('#btn').click(function(){
		startTimer();
	});
});

var timerCount = 0;
//var pumpLastTime = "";
//var pumpCounter = 0;
var second = "";
var minute = "";
var hour = "";
var sliceVal = 0;

function startTimer() {
	if (timerCount == 0) {
		jQuery('#timer').css("display", "block").css("margin-top", "-8px");
		jQuery('#timerTxt').html('Tiempo Jugado').css("font-size", "small");
		jQuery('#btn').css("height", "25px").css("vertical-align", "top");
		jQuery('#btn').addClass("green");
		var time = getTime();
		timerAction(0);
		timerCount = 1;
	}
	else {
		jQuery('#timer').css("display", "none");
		jQuery('#btn').css("height", "25px").css("vertical-align", "top");
		jQuery('#btn').removeClass("green");
		jQuery('#timerTxt').html('Despausar').css("font-size", "20px");
		timerAction(1);
		timerCount = 0;
	}
}

function timerAction(action) {
	var counter = 0;
	var stopwatch = jQuery('#timer');
	var arr = jQuery('#timer').html().split(':');

	if (second == "") {
		second = parseInt("00");
	} else {
		second = arr[2];
	}

	if (minute == "") {
		minute = parseInt("00");
	} else {
		minute = arr[1];
	}

	if (hour == "") {
		hour = parseInt("00");
	} else {
		hour = arr[0];
	}

	if (action == 0) {
		pumpTimerId = setInterval(function () {
			counter++;
			second++;

			if (hour.toString().length == 4) {
				sliceVal = -4;
			}
			else if (hour.toString().length == 3) {
				sliceVal = -3;
			}
			else {
				sliceVal = -2;
			}

			if (second >= 60) {
				minute++;
				if (minute >= 60) {
					hour++;
					minute = 0;
				}
				second = 0;
				stopwatch.html(('0' + hour).slice(sliceVal) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2));
			} else {
				stopwatch.html(('0' + hour).slice(sliceVal) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2));
			}
		}, 1000, true);
	}
	else {
		clearInterval(pumpTimerId);
		counter = 0;
		pumpLastTime = stopwatch.html();
	}
}

function getTime() {
	Number.prototype.padLeft = function (base, chr) {
		var len = (String(base || 10).length - String(this).length) + 1;
		return len > 0 ? new Array(len).join(chr || '0') + this : this;
	};

	var d = new Date,
		dformat = [d.getFullYear().padLeft(),
				(d.getMonth() + 1).padLeft(),
				d.getDate()].join('-') +
			' ' +
			[d.getHours().padLeft(),
				d.getMinutes().padLeft(),
				d.getSeconds().padLeft()].join(':');
	return dformat;
}


/*
Para realizar este juego me guie por los siguientes condigos de paginas en internet:
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
http://www.w3schools.com/jsref/met_document_createelement.asp
http://es.wikihow.com/generar-n%C3%BAmeros-aleatorios-en-JavaScript
https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
*/