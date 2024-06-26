-- load data adhim
LOAD DATA INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/user.csv" INTO TABLE user FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/artist.csv" INTO TABLE artist FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/song.csv" INTO TABLE song FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/playlist.csv" INTO TABLE playlist FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/album.csv" INTO TABLE album FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/user_artist_follow.csv" INTO TABLE user_artist_follow FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n';
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/user_playlist_create.csv" INTO TABLE user_playlist_create FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/user_playlist_follow.csv" INTO TABLE user_playlist_follow FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/user_song_liked.csv" INTO TABLE user_song_liked FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/song_album_contains.csv" INTO TABLE song_album_contains FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/song_artist_sing.csv" INTO TABLE song_artist_sing FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/song_playlist_contains.csv" INTO TABLE song_playlist_contains FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY INFILE "D:/adhim/S4/MBD/SpotitipV2/csv/album_artist_has.csv" INTO TABLE album_artist_has FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;

LOAD DATA LOCAL INFILE "src" INTO TABLE user FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA LOCAL INFILE "src" INTO TABLE artist FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA LOCAL INFILE "src" INTO TABLE song FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA LOCAL INFILE "src" INTO TABLE playlist FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA LOCAL INFILE "src" INTO TABLE album FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE user_artist_follow FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE user_playlist_create FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE user_playlist_follow FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE user_song_liked FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE song_album_contains FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE song_artist_sing FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE song_playlist_contains FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;
LOAD DATA  LOW_PRIORITY INFILE "src" INTO TABLE album_artist_has FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n'  ;

Cannot add or update a child row: a foreign key constraint fails (`spotitip v2`.`user_artist_follow`,
CONSTRAINT `artist_id_follow` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`) ON DELETE CASCADE ON

-- load data raihan
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/album_artist_has.csv" INTO TABLE album_artist_has FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/album.csv" INTO TABLE album FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/artist.csv" INTO TABLE artist FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/playlist_song_contains.csv" INTO TABLE playlist_song_contains FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/playlist.csv" INTO TABLE playlist FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/song_album_contains.csv" INTO TABLE song_album_contains FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/song_artist_sing.csv" INTO TABLE song_artist_sing FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/song.csv" INTO TABLE song FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/user_artist_follow.csv" INTO TABLE user_artist_follow FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/user_playlist_create.csv" INTO TABLE user_playlist_create FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/user_playlist_follow.csv" INTO TABLE user_playlist_follow FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/user_song_liked.csv" INTO TABLE user_song_liked FIELDS TERMINATED BY ',' IGNORE 1 LINES;
LOAD DATA INFILE "E:/Admin's Files/College Tasks/Semester 4/MBD/Spotitip V2/Spotitip-V2/csv/user.csv" INTO TABLE user FIELDS TERMINATED BY ',' IGNORE 1 LINES;