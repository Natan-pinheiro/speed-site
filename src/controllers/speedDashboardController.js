var speedDashboardModel = require("../models/speedDashboardModel");

function buscarResultadoLogin(req, res) {
  var idUsuario = req.params.idUsuario;

  speedDashboardModel.buscarResultadoLogin(idUsuario).then((resultado) => {
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


function salvarTentativa(req, res) {
  var idQuiz = req.body.quizServer;
  console.log(idQuiz);
  var idUsuario = req.body.usuarioServer;
  console.log(idUsuario);
  var certas = req.body.erradasServer;
  console.log(certas);
  var erradas = req.body.certasServer;
  console.log(erradas);


  if (idQuiz == undefined) {
    res.status(400).send("Quiz está undefined!");
  } else if (erradas == undefined) {
    res.status(400).send("erradas está undefined!");
  } else if (certas == undefined) {
    res.status(400).send("certas está undefined!");
  } else {


    speedDashboardModel.salvarTentativa(idUsuario, idQuiz, certas, erradas)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro de tentativa! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarResultadoLogin,
  salvarTentativa
}