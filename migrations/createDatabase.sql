CREATE DATABASE chamado;
USE chamado;
CREATE USER 'chamado'@'localhost' IDENTIFIED BY 'Ch4m$d0s*';
GRANT ALL PRIVILEGES ON chamado.* TO 'chamado'@'localhost';
FLUSH PRIVILEGES;