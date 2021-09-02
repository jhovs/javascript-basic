//Ejemplo de scope global y scope local 

var miNombre = "Jhovan";

function nombre(){
    var miApellido = "Solano";
    console.log(miNombre + " " + miApellido);
}

nombre();

//--> Jhovan Solano