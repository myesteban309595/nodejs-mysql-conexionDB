
const mysql = require('mysql');

const conexion = mysql.createConnection ({
    
    host: 'localhost',
    database: 'usuarios_db',
    user: 'root',
    password: ''
});

conexion.connect(function(error){

    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }

});

// para hacer consultas

conexion.query('SELECT * FROM NAME_TABLE'), function(error, results, fields)  // la base de datos seria NAME_TABLE
{
    if(error);
    throw error;

    results.forEach(result => {  // con esto me msotrara todos los registros que tengo en la base de datos
        console.log(result);
    });
}

conexion.end(); // finalizamos la conexion