const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const bearer = req.get('Autorization');
        if(!bearer){
            const error = new Error('Token not found');
            error.status = 400;
            throw error;
        }
        const token = bearer.split(' ')[1];
        const verifyedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { ...verifyedToken };
        next();
    } catch (error) {
        res.status(error.status || 401).json(error.message);
    }
}

module.exports = auth;