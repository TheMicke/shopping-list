const jwt = require('jsonwebtoken');
const { jwtPrivateKey, jwtPublicKey, jwtSignOptions, jwtVerifyOptions } = require('../../config');

const getJwtToken = async (user) => {
    console.log('getJwtToeken user', user);
    jwtSignOptions.subject = user.email;
    const token = await jwt.sign({ 
        email: user.email,
        username: user.username,
        userRole: user.userRole,
    }, jwtPrivateKey, jwtSignOptions);

    return token;
};

const verifyToken = async (token) => {
    const legit = jwt.verify(token, jwtPublicKey, jwtVerifyOptions);
    console.log('JWT verification result: ' + JSON.stringify(legit));
};

module.exports = {
    getJwtToken,
    verifyToken,
};