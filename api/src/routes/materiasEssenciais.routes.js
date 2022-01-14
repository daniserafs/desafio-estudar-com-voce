const { Router } = require ("express")
const MateriasEssenciaisController = require("../controllers/MateriasEssenciaisController")


const router = new Router()

router.post('/', MateriasEssenciaisController.criar)
router.patch('/:id', MateriasEssenciaisController.atualizar)
router.delete('/:id', MateriasEssenciaisController.delete)
router.get('/', MateriasEssenciaisController.show)

module.exports = router