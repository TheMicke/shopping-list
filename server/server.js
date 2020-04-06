const app = require('./app').app;
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hi there..!');
});

app.listen(port, () => console.log(`Shopping list server is listening on port ${port}!`));
