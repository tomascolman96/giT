-- 1)Cuáles son los nombres y la ocupación de cada uno de los empleados?  
SELECT nombre, trabajo FROM empleados;

-- 2) Cuál es el nombre y la edad de cada uno de los empleados? 
SELECT nombre, edad FROM empleados;

-- 3) Cuál es el nombre y la edad de todos los programadores? 
SELECT nombre, edad FROM empleados WHERE trabajo = 'Programador';

-- 4) Cuáles son los empleados de mas de 30 años? 

select nombre, apellido, edad from empleados where edad > 30;

-- 5) ¿Cuál es el apellido y el mail de los empleados llamados Juan? 

select nombre, apellido, mail from empleados where nombre = 'Juan';

-- 6) ¿Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web? 

select nombre, trabajo from empleados where trabajo = 'Programador' or trabajo = 'Desarrollador Web';

-- 7) Mostrar una lista (id_emp, nombre, apellido, trabajo) de las personas cuyo numero de empleado esté entre 15 y 20. 

select id_emp, nombre, apellido, trabajo from empleados where id_emp between 15 and 20;

-- 8) ¿Cuáles son los Programadores que ganan menos de $80000? 

select nombre, apellido, trabajo, salario from empleados where trabajo = 'Programador' and  salario < 80001;

-- 9) ¿Cuáles son los Programadores que ganan entre $75000 y  $90000? 

select nombre, apellido, trabajo, salario from empleados where salario between 75000 and 90000;

-- 10). ¿Cuáles son los trabajadores cuyo apellido comienza con S? 

select apellido from empleados where apellido like 's%';

-- 11). ¿Cuáles son los trabajadores cuyo nombre termina en l? 

select nombre, apellido from empleados where nombre like '%l';

-- 12). Agregar un empleado con ID_empleado 22 con los siguientes datos:  

 -- Francisco Perez, Programador, 26 años, salario 90000, mail: francisco@bignet.com. 

insert into empleados values (22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com');

-- 13) Borrar los datos de Hernan Rosso. 

delete from empleados where id_emp = 9;

-- 14) Modificar el salario de Daniel Gutierrez a 1000000.

update empleados set salario = 1000000 where id_emp = 14;

