/* const alumnos = [ 
{ 
nombre: 'Juan Gomez', 
nota: 7 
}, { 
nombre: 'Pedro Rodriguez', 
nota: 4 
}, { 
nombre: 'Roxana García', 
nota: 8 
}, { 
nombre: 'Luciano Lopez', 
nota: 5 
}, { 
nombre: 'Fernanda Gimenez', 
nota: 6 
}, { 
nombre: 'Florencia Martinez', 
nota: 10 
}, { 
nombre: 'Raul Sanchez', 
nota: 7 
}, { 
nombre: 'Sandra Figueroa', 
nota: 8 
} 
]; 


const aprobados = alumnos.filter(alumno => alumno.nota>=7);
console.log(aprobados);  ejercicio 1*/


const producto = {  
id: 123,  
nombre: "Auriculares inalámbricos",  
precio: 120000,  
stock: 25,  
categoria: "Electrónica"  
}; 

const {nombre, precio, stock} = producto;


console.log(nombre, stock, precio);