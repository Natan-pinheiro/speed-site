CREATE DATABASE speedSite;
USE speedSite;

CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar (255) unique,
    senha varchar(45)
);

CREATE TABLE quiz(
	idQuiz int primary key auto_increment,
    nome varchar(45),
    descricao varchar(45)
);

CREATE TABLE tentativa(
	idTentativa int auto_increment,
    fkUsuario int,
    fkQuiz int,
    
    constraint primary key(idTentativa, fkUsuario, fkQuiz),
    constraint fkUsuarioTentativa foreign key (fkUsuario)
		references usuario(idUsuario),
	constraint fkQuizTentativa foreign key (fkQuiz)
		references quiz(idQuiz),c
	
    certas int,
    erradas int
);

INSERT INTO quiz VALUES
	(default, 'Quiz: filme', 'Quiz geral sobre o filme'),
    (default, 'Quiz: bastidores', 'Quiz mais focado nos bastidores'),
    (default, 'Quiz: personagens', 'Quiz mais focado nos personagens');

SELECT * FROM quiz;
SELECT * FROM usuario;
SELECT * FROM tentativa;