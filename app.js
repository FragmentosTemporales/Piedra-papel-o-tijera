//variables
let iniciar = prompt ("¿Iniciar el juego? (si/no)");
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

iniciar = prompt("¿Quiere iniciar otro juego? (si/no)");
}

if (iniciar == "no"){
   
   if (contadorA > contadorB){
      document.body.innerHTML = "El ganador es el jugador A con: " + contadorA + " victorias"
   } else if (contadorA == contadorB){
      document.body.innerHTML = "Tenemos un empate!"
   } else {
      document.body.innerHTML = "El ganador es el jugador B con: " + contadorB + " victorias"
   }
}
