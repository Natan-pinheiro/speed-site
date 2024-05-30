var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT 
        certas as acertos, 
        erradas as erros
                    FROM tentativa
                    WHERE fkUsuario = ${idUsuario}
                    AND fkQuiz = 1
                    ORDER BY idTentativa LIMIT 10`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarErrosAcertosGeral(idUsuario) {

    var instrucaoSql = `SELECT 
        sum(certas) as 'totalAcertos',
        sum(erradas) as 'totalErros'
                    FROM tentativa
                    WHERE fkUsuario = ${idUsuario}
                    AND fkQuiz = 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarErrosAcertosGeral,
    buscarMedidasEmTempoReal
}
