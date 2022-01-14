const { Router } = require ("express")
const AlunoController = require('../controllers/AlunoController')

const router = new Router()

router.get('/', AlunoController.show);
router.post('/', AlunoController.criar);
router.delete('/', AlunoController.delete);
router.patch('/:id', AlunoController.atualizar);

module.exports = router