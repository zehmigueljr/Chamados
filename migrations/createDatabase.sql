CREATE DATABASE chamado;

USE chamado;

CREATE TABLE chamado (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(50),
    descricao varchar(255),
    anexo longblob,
    atribuido int,
    solicitante int
);

CREATE TABLE usuario (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    email varchar(100),
    funcao varchar(50),
    data_cadastro datetime,
    data_atualizacao datetime
);