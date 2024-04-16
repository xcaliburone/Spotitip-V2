const mysql = require('mysql');
const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'spotitip' });

function checkCredentials(table, email, password) {     // Fungsi untuk memeriksa apakah email dan password cocok dengan tabel tertentu
    return new Promise((resolve, reject) => {
        const sql = `SELECT COUNT(*) AS count FROM ${table} WHERE email = ? AND password = ?`;
        connection.query(sql, [email, password], (err, result) => { if (err) { reject(err); } else { resolve(result[0].count > 0); } });
    });
}

function checkIfEmailExists(email) {        // Fungsi untuk memeriksa apakah email sudah ada dalam tabel
    return new Promise((resolve, reject) => {
        const sql = "SELECT COUNT(*) AS count FROM user WHERE email = ?";
        connection.query(sql, [email], (err, result) => { if (err) { reject(err); } else { resolve(result[0].count > 0); } });
    });
}

function checkIfUsernameExists(username) {      // Fungsi untuk memeriksa apakah username sudah ada dalam tabel
    return new Promise((resolve, reject) => {
        const sql = "SELECT COUNT(*) AS count FROM user WHERE name = ?";
        connection.query(sql, [username], (err, result) => { if (err) { reject(err); } else { resolve(result[0].count > 0); } });
    });
}

async function checkDuplicatePlaylist(name) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT COUNT(*) AS count FROM playlist WHERE name = ?';
        connection.query(sql, [name], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0].count > 0);
            }
        });
    });
}

module.exports = { checkCredentials, checkIfEmailExists, checkIfUsernameExists, checkDuplicatePlaylist }