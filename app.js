//variables

let contadorA = 0;
let contadorB = 0;

if (confirm("¿Iniciar juego?")) {
  iniciar = "si";
} else {
  iniciar = "no";
}

//inicia ciclo while

while (iniciar == "si")
{
   
   let jugadorA = prompt("Jugador A" , "piedra, papel o tijera");
   let jugadorB = prompt("Jugador B" , "piedra, papel o tijera");

      if(jugadorA == "piedra" && jugadorB == "tijera"){
      contadorA++;
      } else if (jugadorA == "piedra" && jugadorB == "papel"){
         contadorB++;
      } else if (jugadorA == "tijera" && jugadorB == "piedra"){
         contadorB++;
      } else if (jugadorA == "tijera" && jugadorB == "papel"){
         contadorA++;
      } else if (jugadorA == "papel" && jugadorB == "tijera") {
         contadorB++;
      } else if (jugadorA == "papel" && jugadorB == "piedra") {
         contadorA++;
      } else if (jugadorA == jugadorB) {
         alert("empate");
      } else {
         alert("Valores erróneos");
      }

iniciar = prompt("¿Quiere iniciar otro juego?" , "si/no");
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
