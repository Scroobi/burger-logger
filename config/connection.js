const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "Localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}
connection.connect();
module.exports = connection;