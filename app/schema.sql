DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
chirp VARCHAR(300),
time TIMESTAMP NOT NULL,
primary key (id)
);

SELECT * FROM chirps;