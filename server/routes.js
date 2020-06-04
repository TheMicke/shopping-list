const { addUser } = require('./controllers/db/databaseUsersController');
const { attemptLogin } = require('./controllers/user/userController');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hi there..!');
    });

    app.post('/user/register', async (req, res) => {
        res.send(JSON.stringify(await addUser(req.body)));
    });
    
    app.post('/user/login', async (req, res) => {
        res.send(JSON.stringify(await attemptLogin(req.body)));
    });
    
};
