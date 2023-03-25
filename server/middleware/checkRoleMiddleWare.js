const jwt = require('jsonwebtoken')


module.exports = function (role){
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            return next()
        }
        try {
            const token = req.headers.authorization.split('')[1]
            if (!token) {
                res.status(401).json({message: 'Not authorization'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                res.status(403).json({message: 'No access!'})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(403).message('User not authorization')
        }
    }
}
