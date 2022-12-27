
let iniciar = prompt ("¿Iniciar?");
let contadorA = 0;
let contadorB = 0;

//inicia ciclo while

while (iniciar == "si")
{
   
   let jugadorA = prompt("Jugador A");
   let jugadorB = prompt("Jugador B");

if(jugadorA == "piedra" && jugadorB == "tijeras"){
  contadorA = contadorA + 1;
 } else if (jugadorA == "piedra" && jugadorB == "papel"){
   contadorB = contadorB + 1;
 } else if (jugadorA == "tijeras" && jugadorB == "piedra"){
   contadorB = contadorB + 1;
 } else if (jugadorA == "tijeras" && jugadorB == "papel"){
   contadorA = contadorA + 1;
 } else if (jugadorA == "papel" && jugadorB == "tijeras") {
   contadorB = contadorB + 1;
 } else if (jugadorA == "papel" && jugadorB == "piedra") {
   contadorA = contadorA + 1;
 } else if (jugadorA == jugadorB) {
    document.body.innerHTML = "Empate";
 } else {
    document.body.innerHTML = "Valores erróneos"
 }

 iniciar = prompt("Quiere iniciar otro juego (si/no)");
}

if (iniciar == "no"){
   document.body.innerHTML = "las victorias del jugador A son: " + contadorA + "<br>las victorias del jugador B son: " + contadorB;
}


 /* hacer contador de número de partidas y victorias de cada jugador
  hacer el print en html y no en consola document.body.innerHTML */