var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/geral/:idUsuario", function (req, res) {
    medidaController.buscarErrosAcertosGeral(req, res);
});

router.get("/tempo-real/:idTentativa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;