let numeros = [1,2,6,8,77,45,2];

let mayor = numeros[0];

for(i=0;i<numeros.length;i++){

if(numeros[i]>mayor){

    mayor=numeros[i];
   
}

} console.log(`tu numero mayor es ${mayor}!`);