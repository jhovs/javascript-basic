//ejercicio de juego de piedra papel y tijeras 
var piedra = 0
var tijera = 1 
var papel = 2


function play (eleccion) {
    let computer = Math.floor(Math.random() * 3);
    console.log(computer)
    if (eleccion === computer) {
        console.log ("Empate");
    } else if ((eleccion === 0) && (computer === 1)) {
        console.log("Ganaste");
    } else if ((eleccion === 1) && (computer === 2)) {
        console.log("Ganaste");
    } else if ((eleccion === 2) && (computer === 0)) {
        console.log ("Ganaste")
    } else {
        console.log("Perdiste")
    }
};

play(papel);