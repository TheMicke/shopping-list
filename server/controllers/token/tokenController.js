const jwt = require('jsonwebtoken');
const { jwtPrivateKey } = require('../../config');

const jwtOptions = {
    issuer: 'YourCompanyName',
    algorithm: 'RS256',
    expiresIn: '180d',
};

const generateJwtToken = (userData) => {
    jwtOptions.subject = userData.id.toString();

    const payload = {
        userId: userData.id,
        username: userData.username,
    };

    return jwt.sign(payload, jwtPrivateKey, jwtOptions);
};

module.exports = {
    generateJwtToken,
};
