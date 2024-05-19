var pool = require('./bd');
var md5 = require('md5');

async function ordenpornombreypass(usuario, password){ //funcion asincrónica, espera el ingreso de datos por parte del usuario
    try {
        var query = "SELECT * FROM TAREALOG WHERE USUARIO = ? and PASSWORD = ? LIMIT 1";

        var rows = await pool.query(query, [usuario, md5(password)]); //recorre las filas de la tabla TAREALOG
        return rows[0];
    }  catch (error){
        console.log(error);
    }
}

module.exports = { ordenpornombreypass } 