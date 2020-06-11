const { addUser, getSingleUserByEmail } = require('./controllers/db/databaseUsersController');
const { userLogin, getSingleUser } = require('./controllers/user/userController');

// Middleware
const { authenticateToken } = require('./middleware/authenticateToken');


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
    
    app.post('/api/user/profile', authenticateToken, async (req, res) => {
        const user = await getSingleUser(req.body.email);
        res.status(200).send(JSON.stringify(user));
    });



};
