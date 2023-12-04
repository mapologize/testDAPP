const express = require('express');
const cors = require('cors');
const port = 1234;
const app = express();

app.use(cors());

app.get('/',(req, res, next) => {
    res.json({ msg: "cors api get done!"});
});

app.get('/about',(req, res, next) => {
    res.json({ msg: "about page!"});
});

app.listen(port,() => {
    console.log('cors webserver listening port : '+port);
});

module.exports = app;