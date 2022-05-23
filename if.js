//Ejemplo de ocndicional if, else, else if

var edad = 18;

if(edad === 18){
    console.log("Puedes votar, y sera tu primera votación");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}



//operador ternario que es como un if o else 
condition ? true : false;

//Ejemplo ternario

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";