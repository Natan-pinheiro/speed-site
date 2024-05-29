var database = require("../database/config");

function buscarResultadoLogin(idUsuario) {

  var instrucaoSql = `SELECT * FROM usuario WHERE idUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function salvarTentativa(idUsuario, idQuiz, certas, erradas) {
  
  var instrucaoSql = `INSERT INTO tentativa VALUES (default, ${idUsuario}, ${idQuiz}, ${certas}, ${erradas})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarResultadoLogin,
  salvarTentativa
}