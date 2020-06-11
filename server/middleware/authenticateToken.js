const jwt = require('jsonwebtoken');
const { jwtPublicKey } = require('../config');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, jwtPublicKey, (err, user) => {
        if (err) { 
            console.log('JWT verify error: ', err);
            return res.sendStatus(403);
        }
        req.user = user;
        next(); // pass the execution off to whatever request the client intended
    });
};

module.exports = { authenticateToken };
