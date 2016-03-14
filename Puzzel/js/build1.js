(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlImg = "img/image01.jpg",
    matrizPuzzle = [],
    //Para guardar la matriz de la respuesta...
matrizDesorganiza = [];

var valorCorte = 100; //El valor del corte que se hará...
_utils2.default.creaPuzzle(urlImg, valorCorte, function (_ref) {
    var _ref$error = _ref.error;
    var error = _ref$error === undefined ? false : _ref$error;
    var data = _ref.data;

    if (!error) {
        matrizPuzzle = JSON.parse(JSON.stringify(data));
        matrizDesorganiza = JSON.parse(JSON.stringify(data));
        //Crear clase del fondo...
        _utils2.default.createClass(".fondo", "background: url(" + urlImg + ");\n                                     background-repeat: none;\n                                     font-family: Arial;\n                                     color: white;\n                                     text-shadow: 1px 1px 1px black;");
        imprimePuzzle(data);
    }
});

//Para el estilo de las celdas...
var estiloCelda = function estiloCelda(_ref2) {
    var fila = _ref2.fila;
    var columna = _ref2.columna;
    var ocupado = _ref2.ocupado;

    //margin-right: 5px;
    var style = "width: " + valorCorte + "px;\n                 height: " + valorCorte + "px;\n                 display: inline-block;\n                 border: 1px solid black;";
    var clase = "";
    if (ocupado) {
        style += "background-position: -" + fila + "px -" + columna + "px;\n                  cursor: pointer;\n                  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.42);";
        clase = "class = 'fondo'";
    }
    return { style: style, clase: clase };
};

//Para imprimir el Puzzle...
var imprimePuzzle = function imprimePuzzle(data) {
    window.global = data;
    //utils.accesoDOM("puzzle").style.height = utils.accesoDOM("puzzle").style.width = `${(valorCorte * data.length) + (data.length * 5)}px`;
    _utils2.default.accesoDOM("puzzle").style.height = _utils2.default.accesoDOM("puzzle").style.width = valorCorte * data.length + data.length * 2 + "px";
    var cortes = "";
    for (var veces = 1; veces <= 2; veces++) {
        for (var i = 0; i < data.length; i++) {
            if (veces === 1) {
                cortes += "<div class = 'niveles'>";
            }
            for (var c = 0; c < data.length; c++) {
                if (veces === 1) {
                    var _estiloCelda = estiloCelda({
                        fila: data[i][c].fila,
                        columna: data[i][c].columna,
                        ocupado: data[i][c].ocupado
                    });

                    var style = _estiloCelda.style;
                    var clase = _estiloCelda.clase;

                    var numero = data[i][c].ocupado ? data[i][c].cont : "&nbsp;";
                    cortes += "<div id = '" + i + "_" + c + "' " + clase + " style = '" + style + "'>" + numero + "</div>";
                } else {
                    //Para los Listeners...
                    _utils2.default.accesoDOM(i + "_" + c).addEventListener('click', function (event) {
                        var ind = event.target.id.split("_");
                        presionaPieza(Number(ind[0]), Number(ind[1]));
                    });
                }
            }
            if (veces === 1) {
                cortes += "</div>";
            }
        }
        if (veces === 1) {
            _utils2.default.accesoDOM("puzzle").innerHTML = cortes;
        }
    }
};

var presionaPieza = function presionaPieza(fila, columna) {
    //Saber que el elemento presionado, esté ocupado...
    if (matrizDesorganiza[fila][columna].ocupado) {
        //Revisar si se tiene lugar para mover...
        var direcciones = {
            izquierda: [0, -1],
            arriba: [-1, 0],
            derecha: [0, 1],
            abajo: [1, 0]
        };
        for (var i in direcciones) {
            var posBusca = {
                fila: fila + direcciones[i][0],
                columna: columna + direcciones[i][1]
            };
            //console.log(posBusca);
            var enPosicion = posBusca.fila >= 0 && posBusca.fila < matrizPuzzle.length && posBusca.columna >= 0 && posBusca.columna < matrizPuzzle.length;
            if (enPosicion) {
                //Saber si existe espacio...
               if (matrizDesorganiza[posBusca.fila][posBusca.columna].ocupado == false)
               {
                    matrizDesorganiza[posBusca.fila][posBusca.columna]=JSON.parse(JSON.stringify(matrizDesorganiza[fila][columna]));
                    matrizDesorganiza[fila][columna].ocupado = !matrizDesorganiza[fila][columna].ocupado;
               } 
                imprimePuzzle(matrizDesorganiza);
            }
        }
    }
};

//Para desorganizar el Puzlle..
var desorganizaPuzzle = function desorganizaPuzzle() {
    matrizDesorganiza = [];
    var valorMaximo = Math.pow(matrizPuzzle.length, 2);
    var desorganiza = [],
        fila = 0,
        columna = 0,
        existe = false,
        cont = 0;
    do {
        //Obtener los valores aleatorio...
        existe = false;
        fila = Math.floor(Math.random() * matrizPuzzle.length);
        columna = Math.floor(Math.random() * matrizPuzzle.length);
        if (desorganiza.length !== 0) {
            for (var i = 0; i < desorganiza.length; i++) {
                if (desorganiza[i].fila === fila && desorganiza[i].columna === columna) {
                    existe = true;
                    break;
                }
            }
        }
        if (!existe) {
            desorganiza.push({ fila: fila, columna: columna });
            if (desorganiza.length === valorMaximo) {
                break;
            }
        }
    } while (1);
    //console.log(desorganiza);
    //Para crear la Matriz desorganizada...
    for (var _i = 0; _i < matrizPuzzle.length; _i++) {
        matrizDesorganiza.push([]);
        for (var c = 0; c < matrizPuzzle.length; c++) {
            var posicion = desorganiza[cont];
            matrizDesorganiza[_i][c] = JSON.parse(JSON.stringify(matrizPuzzle[posicion.fila][posicion.columna]));
            cont++;
        }
    }
    imprimePuzzle(matrizDesorganiza);
};

//Para los botones...
_utils2.default.accesoDOM("desorganiza").addEventListener('click', function (event) {
    desorganizaPuzzle();
});

_utils2.default.accesoDOM("resuelve").addEventListener('click', function (event) {
    matrizDesorganiza = JSON.parse(JSON.stringify(matrizPuzzle));
    imprimePuzzle(matrizPuzzle);
});

_utils2.default.accesoDOM("comprueba").addEventListener('click', function (event) {
    console.log("Validación de comprobación");
});

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

var accesoDOM = function accesoDOM(param) {
    return document.getElementById(param);
};

var creaCortes = function creaCortes(dimension, corte) {
    var numeroCortes = dimension / corte,
        posicionCortes = [],
        fila = 0,
        columna = 0,
        ocupado = true,
        cont = 1;
    for (var i = 0; i < numeroCortes; i++) {
        fila = 0;
        posicionCortes.push([]);
        for (var c = 0; c < numeroCortes; c++) {
            ocupado = i === numeroCortes - 1 && c === numeroCortes - 1 ? false : true;
            posicionCortes[i].push({
                fila: fila,
                columna: columna,
                ocupado: ocupado,
                cont: cont
            });
            fila += corte;
            cont++;
        }
        columna += corte;
    }
    return posicionCortes;
};

//Para cargar la imagen y devolverla dividida...
var creaPuzzle = function creaPuzzle(urlImg, corte, callback) {
    var imagen = new Image();
    imagen.onload = function () {
        if (imagen.width === imagen.height) {
            callback({ data: creaCortes(imagen.height, corte) });
        } else {
            callback({ error: true });
        }
    };
    imagen.onerror = function () {
        callback({ error: true });
    };
    imagen.src = urlImg;
};

//Crear una clase en ejecución...
//http://stackoverflow.com/a/22697964
var createClass = function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule) {
        (style.styleSheet || style.sheet).addRule(name, rules);
    } else {
        style.sheet.insertRule(name + "{" + rules + "}", 0);
    }
};

module.exports = {
    accesoDOM: accesoDOM,
    creaPuzzle: creaPuzzle,
    createClass: createClass
};

},{}]},{},[1]);
