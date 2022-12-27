let jugadorA = prompt("Jugador A");
let jugadorB = prompt("Jugador B");

if(jugadorA == "piedra" && jugadorB == "tijeras"){
    document.body.innerHTML = "Gana jugador A"
 } else if (jugadorA == "piedra" && jugadorB == "papel"){
    document.body.innerHTML = "Gana jugador B"
 } else if (jugadorA == "tijeras" && jugadorB == "piedra"){
    document.body.innerHTML = "Gana jugador B"
 } else if (jugadorA == "tijeras" && jugadorB == "papel"){
    document.body.innerHTML = "Gana jugador A"
 } else if (jugadorA == "papel" && jugadorB == "tijeras") {
    document.body.innerHTML = "Gana jugador B"
 } else if (jugadorA == "papel" && jugadorB == "piedra") {
    document.body.innerHTML = "Gana jugador A"
 } else if (jugadorA == jugadorB) {
    document.body.innerHTML = "Empate";
 } else {
    document.body.innerHTML = "Valores erróneos"
 }

 /* hacer contador de número de partidas y victorias de cada jugador
  hacer el print en html y no en consola document.body.innerHTML */