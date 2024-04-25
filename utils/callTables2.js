const mysql = require('mysql');
const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'spotitip' });

// async function getAllMySongs(artistId) {
//     return new Promise((resolve, reject) => {
//         const sql = `
//             SELECT s.id, s.name, s.genre, s.duration
//             FROM song_artist_sing sa
//             JOIN song s ON sa.song_id = s.id
//             WHERE sa.artist_id = ?
//         `;
//         connection.query(sql, [artistId], (err, results) => {
//             if (err) { reject(err);
//             } else { resolve(results); }
//         });
//     });
// }

async function getAllMySongs(artistId) {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT s.id, s.name, s.genre, s.duration, artist.name AS artist_name
            FROM song_artist_sing sa
            JOIN song s ON sa.song_id = s.id
            JOIN artist ON sa.artist_id = artist.id
            WHERE sa.artist_id = ?
        `;
        connection.query(sql, [artistId], (err, results) => {
            if (err) { reject(err);
            } else { resolve(results); }
        });
    });
}

// async function getAllMyAlbums(artistId) {
//     return new Promise((resolve, reject) => {
//         const sql = `
//             SELECT a.id, a.name, a.num_song, a.duration
//             FROM album_artist_has aa
//             JOIN album a ON aa.album_id = a.id
//             WHERE aa.artist_id = ?
//         `;
//         connection.query(sql, [artistId], (err, results) => {
//             if (err) { reject(err);
//             } else { resolve(results); }
//         });
//     });
// }

async function getAllMyAlbums(artistId) {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT a.id, a.name, a.num_song, a.duration, artist.name AS artist_name
            FROM album_artist_has aa
            JOIN album a ON aa.album_id = a.id
            JOIN artist ON aa.artist_id = artist.id
            WHERE aa.artist_id = ?
        `;
        connection.query(sql, [artistId], (err, results) => {
            if (err) { reject(err);
            } else { resolve(results); }
        });
    });
}

async function getAllMyPlaylists(artistId) {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT p.id, p.name, p.num_song, p.duration
            FROM user_playlist_create upc
            JOIN playlist p ON upc.playlist_id = p.id
            WHERE upc.user_id = ?
        `;
        connection.query(sql, [artistId], (err, results) => {
            if (err) { reject(err);
            } else { resolve(results); }
        });
    });
}

module.exports = { getAllMyAlbums, getAllMySongs, getAllMyPlaylists }