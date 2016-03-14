let accesoDOM = param => document.getElementById(param);

let creaCortes = (dimension, corte) =>
{
    let numeroCortes    = dimension / corte,
        posicionCortes  = [],
        fila            = 0,
        columna         = 0,
        ocupado         = true,
        cont            = 1;
    for(let i = 0; i < numeroCortes; i++)
    {
        fila = 0;
        posicionCortes.push([]);
        for(let c = 0; c < numeroCortes; c++)
        {
            ocupado = (i === numeroCortes - 1 && c === numeroCortes - 1) ? false : true;
            posicionCortes[i].push(
                                        {
                                            fila,
                                            columna,
                                            ocupado,
                                            cont
                                        }
                                    );
            fila += corte;
            cont++;
        }
        columna += corte;
    }
    return posicionCortes;
};

//Para cargar la imagen y devolverla dividida...
let creaPuzzle = (urlImg, corte, callback) =>
{
    let imagen  = new Image();
    imagen.onload = () =>
    {
        if(imagen.width === imagen.height)
        {
            callback({data : creaCortes(imagen.height, corte)});
        }
        else
        {
            callback({error : true});
        }
    };
    imagen.onerror = () =>
    {
        callback({error : true});
    }
    imagen.src = urlImg;
};

//Crear una clase en ejecución...
//http://stackoverflow.com/a/22697964
let createClass = (name,rules) =>
{
    let style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule)
    {
        (style.styleSheet || style.sheet).addRule(name, rules);
    }
    else
    {
        style.sheet.insertRule(name+"{"+rules+"}",0);
    }
};

module.exports = {
                    accesoDOM,
                    creaPuzzle,
                    createClass
                };