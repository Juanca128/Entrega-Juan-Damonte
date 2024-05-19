var pool = require('./bd');

async function getnovedades() { //funcion asincrónica, espera el ingreso de datos por parte del usuario
    try {
        var query = "SELECT * FROM NOVEDADES ";

        var rows = await pool.query(query); //recorre las filas de la tabla TAREALOG

        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function insertarnovedad(obj) {
    try {
        var query = "INSERT INTO Novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function borrarnovedad(id) {

    var query = "DELETE FROM Novedades WHERE ID = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getnovedporid(id) {

    var query = "SELECT * FROM Novedades WHERE ID = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updatebyID(obj, id) {

    try {

        var query = "UPDATE Novedades SET ? WHERE id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }
    catch (error) {

        throw error;

    }
}

module.exports = { getnovedades, insertarnovedad, borrarnovedad, getnovedporid, updatebyID } 