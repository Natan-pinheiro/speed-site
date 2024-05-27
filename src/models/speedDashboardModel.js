var database = require("../database/config");

function buscarResultadoQuiz(idUsuario) {

  var instrucaoSql = `SELECT * FROM tentativa WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarTentativa(idUsuario, idQuiz, acertos, erros) {
  
  var instrucaoSql = `INSERT INTO tentativa VALUES (default, ${idUsuario}, ${idQuiz}, ${acertos}, ${erros})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarResultadoQuiz,
  cadastrarTentativa
}