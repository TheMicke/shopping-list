const { addUser } = require('./controllers/db/databaseUsersController');
const { userLogin } = require('./controllers/user/userController');

// const { jwtOptions } = require('./config');
const jwt = require('./services/jwtService');

module.exports = function(app) {
    app.get('/api/', (req, res) => {
        res.send('Hi there..!');
    });

    app.post('/api/user/register', async (req, res) => {
        res.send(JSON.stringify(await addUser(req.body)));
        
    });
    
    app.post('/api/user/login', async (req, res) => {
        res.send(JSON.stringify(await userLogin(req.body)));
    });
    
    app.post('/api/user/profile', async (req, res) => {
        jwt.verify(req.get('Authorization'), req.body);
        console.log('Route decode', jwt.decode(req.get('Authorization')));

        // if(jwt.verify(req.get('Authorization'), req.body)){
        //     res.send(JSON.stringify({status: 'sucess', message: 'Token is valid'}));
        // } else {
        //     res.send(JSON.stringify({status: 'fail', message: 'Token is invalid'}));
        // }
    });



};
