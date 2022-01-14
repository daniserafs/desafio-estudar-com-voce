const { Router } = require("express")
const MateriasFaculdadeController = require("../controllers/MateriasFaculdadeController")
const router = new Router()

router.post('/:idFaculdade', MateriasFaculdadeController.criar)
router.get('/:idFaculdade', MateriasFaculdadeController.show)
router.delete('/', MateriasFaculdadeController.delete)
router.patch('/:id', MateriasFaculdadeController.update)

module.exports = router