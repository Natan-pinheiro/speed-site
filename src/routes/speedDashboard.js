var express = require("express");
var router = express.Router();

var speedDashboardController = require("../controllers/aquarioController");

router.get("/:idUsuario", function (req, res) {
  speedDashboardController.buscarResultadoQuiz(req, res);
});

router.post("/cadastrarTentativa", function (req, res) {
  speedDashboardController.cadastrarTentativa(req, res);
})

module.exports = router;