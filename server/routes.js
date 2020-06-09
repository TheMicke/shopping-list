const { addUser } = require('./controllers/db/databaseUsersController');
const { userLogin } = require('./controllers/user/userController');

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
    
    app.get('/api/user/profile', async (req, res) => {
        console.log(req.headers['authorization']);
        if(jwt.verify()){
            res.send(JSON.stringify({status: 'sucess', message: 'Token valid'}));
        } else {
            res.send(JSON.stringify({status: 'fail', message: 'Token not valid'}));
        }
    });



};
