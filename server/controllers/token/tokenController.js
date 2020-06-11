const jwt = require('../../services/jwtService');

const getJwtToken = async (user) => {
    const payload = { 
        id: user.id,
        email: user.email,
        username: user.username,
        userRole: user.userRole,
    };

    const userSpecificOptions = {
        subject: user.email, 
        audience: user.id.toString()
    };

    const token = await(jwt.sign(payload, userSpecificOptions));

    return token;
};

const verifyToken = async (token, user) => {
    const userSpecificOptions = {
        subject: user.email, 
        audience: user.id.toString()
    };

    const legit = jwt.verify(token, userSpecificOptions);
    console.log('JWT verification result: ' + JSON.stringify(legit));
};

module.exports = {
    getJwtToken,
    verifyToken,
};

// const jwt = require('jsonwebtoken');
// const { jwtPrivateKey, jwtPublicKey, jwtSignOptions, jwtVerifyOptions } = require('../../config');

// const getJwtToken = async (user) => {
//     jwtSignOptions.subject = user.email;
//     const token = await jwt.sign({ 
//         email: user.email,
//         username: user.username,
//         userRole: user.userRole,
//     }, jwtPrivateKey, jwtSignOptions);

//     return token;
// };

// const verifyToken = async (token) => {
//     const legit = jwt.verify(token, jwtPublicKey, jwtVerifyOptions);
//     console.log('JWT verification result: ' + JSON.stringify(legit));
// };

// module.exports = {
//     getJwtToken,
//     verifyToken,
// };