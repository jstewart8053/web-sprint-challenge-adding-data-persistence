const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send(`Server running at http://localhost:${PORT}`)
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});