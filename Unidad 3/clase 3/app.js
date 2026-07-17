var pool = require('./bd');


pool.query("SELECT * FROM empleados").then(function(resultados) {
    console.log(resultados);
});