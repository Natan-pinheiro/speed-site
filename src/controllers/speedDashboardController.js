var aquarioModel = require("../models/aquarioModel");

function buscarResultadoQuiz(req, res) {
  var idUsuario = req.params.idUsuario;

  speedDashboardModel.buscarResultadoQuiz(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as tentativas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrarTentativa(req, res) {
  var idQuiz = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (idQuiz == undefined) {
    res.status(400).send("quiz está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    speedDashboardModel.cadastrarTentativa(idUsuario, idQuiz, acertos, erros)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarResultadoQuiz,
  cadastrarTentativa
}