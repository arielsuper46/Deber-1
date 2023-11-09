'use strict'

const promedio = parseFloat(prompt("¿Cual es el preomedio?"));
const ingresos = parseInt(prompt("¿Cuales son los ingresos"));

if (promedio >= 8.5 && ingresos <=600){
    alert("Aprobado");
}
else{
    alert("Desaprobado");
}