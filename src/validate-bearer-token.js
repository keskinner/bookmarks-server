const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
    const authToken = req.get('Authorization')
    logger.error(`Unathorized request to path: ${req.path}`)

    if (!aauthToken || authToken.split(' ')[1] !== API_TOKEN) {
        return res.status(401).json({ error: 'Unathorized request' })
    }

    next()
}

module.exports = validateBearerToken