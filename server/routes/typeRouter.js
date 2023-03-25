const Router = require('express')
const typeController = require('../controllers/typeController')
const checkRoleMiddleWare = require('../middleware/checkRoleMiddleWare')
const router = new Router()

router.post('/',checkRoleMiddleWare('ADMIN'), typeController.create)
router.get('/', typeController.getAll)



module.exports = router