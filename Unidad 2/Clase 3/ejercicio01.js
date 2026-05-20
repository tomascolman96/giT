    /* Consigna 1
let num1 = Number(prompt("ingrese su primer numero"))
let num2 = Number(prompt ("ingrese su segundo numero"))
let prom;
function calcularPromedio(num1,num2){

return (num1+num2)/2;

}

let resultadoFinal = calcularPromedio(num1, num2);

console.log(`El promedio es: ${resultadoFinal}`); */


/* Consigna 2 */

const textarea = document.querySelector("#areatexto");
const contador = document.querySelector("#cuento");

textarea.addEventListener("input", function(){

    let cantidad = textarea.value.length;
    console.log(cantidad);
    contador.innerText= cantidad ;


})











