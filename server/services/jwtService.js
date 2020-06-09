const jwt = require('jsonwebtoken');
const { jwtPrivateKey, jwtPublicKey } = require('../config');

const algorithm = 'RS256';
const expiresIn = '365d';

module.exports = {
    sign: (payload, options) => {
        /*
      sOptions = {
       issuer: "Authorization/Resource/This server",
       subject: "iam@user.me", 
       audience: "Client_Identity" // this should be provided by client
      }
     */
        // Token signing options
        var signOptions = {
            issuer: options.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: expiresIn,
            algorithm: algorithm,
        };
        return jwt.sign(payload, jwtPrivateKey, signOptions);
    },
    verify: (token, options) => {
        /*
      vOption = {
       issuer: "Authorization/Resource/This server",
       subject: "iam@user.me", 
       audience: "Client_Identity" // this should be provided by client
      }  
     */
        var verifyOptions = {
            issuer: options.issuer,
            subject: options.subject,
            audience: options.audience,
            expiresIn: expiresIn,
            algorithm: [algorithm],
        };
        try {
            return jwt.verify(token, jwtPublicKey, verifyOptions);
        } catch (err) {
            return false;
        }
    },
    decode: token => {
        //returns null if token is invalid
        return jwt.decode(token, { complete: true });
    },
};
