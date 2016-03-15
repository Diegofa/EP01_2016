let accesoDOM = param => document.getElementById(param);
let isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
module.exports = {accesoDOM, isNumber};
