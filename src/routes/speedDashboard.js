var express = require("express");
var router = express.Router();

var speedDashboardController = require("../controllers/speedDashboardController");

router.get("/:idUsuario", function (req, res) {
  speedDashboardController.buscarResultadoQuiz(req, res);
});

router.post("/salvarTentativa", function (req, res) {
  speedDashboardController.salvarTentativa(req, res);
})

module.exports = router;