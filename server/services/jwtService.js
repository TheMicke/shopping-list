const jwt = require('jsonwebtoken');
const { jwtPrivateKey, jwtPublicKey } = require('../config');

const generalJwtOptions = {
    issuer: 'YourCompanyName',
    algorithm: 'RS256',
    expiresIn: '1year',
};

module.exports = {
    sign: (payload, options) => {
        console.log('jwtService: signing token');
        /*
      sOptions = {
       issuer: "Authorization/Resource/This server",
       subject: "iam@user.me", 
       audience: "Client_Identity" // this should be provided by client
      }
     */
        // Token signing options
        var signOptions = {
            issuer: generalJwtOptions.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: generalJwtOptions.expiresIn,
            algorithm: generalJwtOptions.algorithm,
        };
        return jwt.sign(payload, jwtPrivateKey, signOptions);
    },
    
    verify: (token, options) => {
        console.log('jwtService: verifying token');
        /*
      vOption = {
       issuer: "Authorization/Resource/This server",
       subject: "iam@user.me", 
       audience: "Client_Identity" // this should be provided by client
      }  
     */
        var verifyOptions = {
            issuer: generalJwtOptions.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: generalJwtOptions.expiresIn,
            algorithm: [generalJwtOptions.algorithm],
        };

        try {
            console.log('trying...');
            return jwt.verify(token, jwtPublicKey, verifyOptions);
        } catch (err) {
            console.log('jwtService: ERROR: ', err);
            return false;
        }
    },
    decode: token => {
        //returns null if token is invalid
        return jwt.decode(token, { complete: true });
    },
};
