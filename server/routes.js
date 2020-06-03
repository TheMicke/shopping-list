const { addUser } = require('./controllers/databaseUsersController');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hi there..!');
    });

    app.post('/user/register', async (req, res) => {
        // console.log('register POST-route ', req.body);
        res.send(JSON.stringify(await addUser(req.body)));
    });
};
