var express = require("express");
var router = express.Router();

var speedUsuariosController = require("../controllers/speedUsuariosController")

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /speedUsuarios/cadastrar
    speedUsuariosController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    speedUsuariosController.autenticar(req, res);
});

module.exports = router;