const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4a4itri6',
    port:'3306',
    database: 'db_basico'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error :'+ err)
    }
    else
    {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion