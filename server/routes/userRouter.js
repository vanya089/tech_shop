const Router = require('express')
const UserController = require('../controllers/userController')
const authMiddleWare = require('../middleware/authMiddleware')

const router = new Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleWare, UserController.check)


module.exports = router