/* Utilizando estructura de control determinar el medio de transporte más adecuado para
una persona. Dada una distancia en metros, sugiera un medio de transporte basado
en las siguientes reglas:
0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avion
*/

let inicio = prompt("Por favor, ingrese su numero");


if (inicio>=0 && inicio<=1000){

console.log("lo mejor es ir a pie");

}   else if (inicio>1000 && inicio<=10000) {

    console.log("lo mejor es ir en bicicleta");


} else if (inicio>10000 && inicio<=30000){

    console.log ("lo mejor es ir en coletivo");
}

else if (inicio>30000 && inicio<=100000){


    console.log("lo mejor es ir en auto");
}

else if (inicio>100000){

console.log("lo mejor es ir en avión");

}