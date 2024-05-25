var speedUsuariosModel = require("../models/speedUsuariosModel");

function cadastrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    speedUsuariosModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("Usuário cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}