const { Router } = require ("express")
const MatriculasController = require("../controllers/MatriculasController")
const Login = require('../middlewares/login')


const router = new Router()

router.post('/', Login, MatriculasController.criar)
router.get('/:id', MatriculasController.show)
router.delete('/:idAluno', MatriculasController.deletar)


module.exports = router