const { Router } = require ("express")
const FaculdadeController = require("../controllers/FaculdadeController")


const router = new Router()

router.post('/', FaculdadeController.criar)
router.patch('/:id', FaculdadeController.atualizar)

module.exports = router