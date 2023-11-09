'use strict'
let edad = Number(prompt("Introducir edad requerida"));
let licenciaProfesional = prompt("¿Tiene licenica profecional?");

if(licenciaProfesional == "Si", licenciaProfesional == "si"){
    licenciaProfesional = Boolean(true)
}
else{
    licenciaProfesional = Boolean(false)
}

if((edad>=25)&&(licenciaProfesional)){
    alert("Apto para el trabajo");
}
else{
    alert("No apto para el trabajo");
}

