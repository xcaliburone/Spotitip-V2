-- ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
DROP TABLE IF EXISTS `album`;
DROP TABLE IF EXISTS `album_artist_has`;
DROP TABLE IF EXISTS `artist`;
DROP TABLE IF EXISTS `playlist`;
DROP TABLE IF EXISTS `playlist_song_contains`;
DROP TABLE IF EXISTS `song`;
DROP TABLE IF EXISTS `song_artist_sing`;
DROP TABLE IF EXISTS `song_album_contains`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `user_artist_follow`;
DROP TABLE IF EXISTS `user_playlist_create`;
DROP TABLE IF EXISTS `user_playlist_follow`;
DROP TABLE IF EXISTS `user_song_liked`;

DELETE FROM user;

SHOW VARIABLES LIKE "secure_file_priv";