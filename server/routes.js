module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hi there..!');
    });

    app.post('/user/register', (req, res) => {
        console.log('register POST-route ', req.body);
        res.send(JSON.stringify({ status: 'success', message: 'You successfully registered' }));
    });
};
