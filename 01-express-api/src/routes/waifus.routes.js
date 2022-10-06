const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
    index,
    create,
    update,
    destroy,
    show,
} = require("../controllers/waifus.controller");
const { camposValidados } = require("../middlewares/validarCampos");

// obtiene todos los recursos
router.get("/", index);
// crear recursos
router.post("/create", [
    check('name', 'El nombre de la waifu es obligatorio').not().isEmpty().isString().not().isNumeric(),
    camposValidados
], create);
// editar
router.put("/update/:waifu", [check('name', 'El nombre de la waifu es obligatorio').not().isEmpty(), camposValidados], update);
// elimine
router.delete("/delete/:waifu", destroy);
// mostrar un registro
router.get("/show/:waifu", show);

module.exports = router;