// Do not use these keys in a live version, generate a new pair and change replace these
const jwtPrivateKey = `-----BEGIN PRIVATE KEY-----
MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEAifsIrWy+u/q86EOO
3LKStxfvlM5mgJGti9RtQXSZU2A2qLIYOFM2l0PEG0sjd48pIkc9pryWQEObFXKx
jRAwrwIDAQABAkBQfBHvt0L6u6N9iArJSZCzJE8n6c14qYEl0193kt/s9YyOi+h7
9CE6X/CR6g1i8RkmfhZTMwK0GJlRdJegQNghAiEA8BdTeJtNiLjIqPH8a9HfWxCA
4riNcDCxiVx3IJdbprMCIQCTH5qGYZr0CIcxplR7Lt8OVVX6z7Eoh/syhcD6Auhs
FQIgO+al9b5Rnt3zems9fi0Tm+XHMkm3SBluAgZm1mPNAw8CIEGiRriOkKcvqshu
kJ/HwEDPtyTGRR101I6sdvPSGkglAiBEgoNp/rQ23FIwfs/K7KFMtYL3AEsnFhYV
RhtILfnPPw==
-----END PRIVATE KEY-----`;

// Do not use these keys in a live version, generate a new pair and change replace these
const jwtPublicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIn7CK1svrv6vOhDjtyykrcX75TOZoCR
rYvUbUF0mVNgNqiyGDhTNpdDxBtLI3ePKSJHPaa8lkBDmxVysY0QMK8CAwEAAQ==
-----END PUBLIC KEY-----`;

const jwtOptions = {
    issuer: 'YourCompanyName',
    algorithm: 'RS256', 
    expiresIn: '1year'
};

module.exports = {
    jwtPrivateKey,
    jwtPublicKey,
    jwtOptions,
};