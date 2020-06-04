const jwt = require('jsonwebtoken');
const { jwtPrivateKey, jwtPublicKey, jwtOptions } = require('../../config');

const getJwtToken = async (user) => {
    // jwtOptions.subject = user.email;
    const token = await jwt.sign({ 
        email: user.email,
        username: user.username,
        userRole: user.userRole,
    }, jwtPrivateKey, jwtOptions);

    return token;
};

const verifyToken = async (token) => {
    const legit = await jwt.verify(token, jwtPublicKey, jwtOptions);
    console.log(legit);
};

module.exports = {
    getJwtToken,
    verifyToken,
};