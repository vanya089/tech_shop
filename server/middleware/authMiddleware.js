const jwt = require('jsonwebtoken')


module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        return next()
    }
    try {
        const token = req.headers.authorization.split('')[1]
        if (!token) {
            res.status(401).json({message: 'Not authorization'})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        res.status(403).message('User not authorization')
    }
}