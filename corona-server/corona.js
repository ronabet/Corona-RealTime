const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');


var port = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('access-Control-Allow-Origin', '*');
    next();
});


app.use('/', express.static(__dirname + '/front/dist/corona'));


http.listen(port, function(){
    console.log('listening on *: ' + port);
});
