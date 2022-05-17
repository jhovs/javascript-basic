//hay dos tipos de funciones 

//Declarativas 
function miFuncion1(){
    return 3;
}

miFuncion1();

//Expresión se les conose tambien como funciones anonimas
var miFuncion2 = function(a,b){
    return a + b;
}

miFuncion2();


//funcion declarativa 
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

saludarEstudiantes("Jhovan");

//--> 
function sumar(a,b){
    var resultado = a + b;
    return resultado;
}


function sumar(a,b){
    return a + b;
}