//variables

let contadorA = 3;
let contadorB = 3;


//inicia ciclo while contador a la inversa

while (contadorA != 0 && contadorB != 0)
{
   
   let jugadorA = prompt("Jugador A" , "piedra, papel o tijera");
   let jugadorB = prompt("Jugador B" , "piedra, papel o tijera");

      if(jugadorA == "piedra" && jugadorB == "tijera"){
      contadorB--;
      } else if (jugadorA == "piedra" && jugadorB == "papel"){
         contadorA--;
      } else if (jugadorA == "tijera" && jugadorB == "piedra"){
         contadorA--;
      } else if (jugadorA == "tijera" && jugadorB == "papel"){
         contadorB--;
      } else if (jugadorA == "papel" && jugadorB == "tijera") {
         contadorA--;
      } else if (jugadorA == "papel" && jugadorB == "piedra") {
         contadorB--;
      } else if (jugadorA == jugadorB) {
         alert("empate");
      } else {
         alert("Valores erróneos");
      }


}

if (contadorA == 0 || contadorB == 0){
   
   if (contadorA > contadorB){
      document.body.innerHTML = "El jugador B ha quedado sin puntos! Gana el jugador A"
   }  else {
      document.body.innerHTML = "El jugador A ha quedado sin puntos! Gana el jugador B"
   }
}
