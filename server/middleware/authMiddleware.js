const jwt = require('jsonwebtoken');
const { jwtPrivateKey } = require('../config');

const authMiddleware = (req, res, next) => {
    // get the token from the request header
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    // If no token is included the user access won't be granted
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        //if can verify the token, set req.user and pass to next middleware
        const decoded = jwt.verify(token, jwtPrivateKey);
        req.user = decoded;
        next();
    } catch (ex) {
        // If the token is invalid sen error 400
        res.status(400).send('Invalid token.');
    }
};

module.exports = { authMiddleware };