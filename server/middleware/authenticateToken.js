const jwt = require('jsonwebtoken');
const { jwtPublicKey } = require('../config');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token == null) return res.sendStatus(401); // no token == error 401...

    jwt.verify(token, jwtPublicKey, (err, user) => {
        if (err) { 
            console.log('JWT verify error: ', err);
            return res.sendStatus(403);
        }
        req.user = user;
        next(); 
    });
};

module.exports = { authenticateToken };
