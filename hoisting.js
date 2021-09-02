//ejemplo de hoisting

console.log(miNombre);
var miNombre = "Jhovan";


//Con funciones ejemplo de hoisti 

hey();

function hey(){
    console.log("Hola " + miNombre);
}

var miNombre = "Jhovan";