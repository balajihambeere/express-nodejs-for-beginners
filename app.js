var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./src/routes/appRoutes');

var app = new express();

const PORT = 3000;

mongoose.Promise = global.Promise;

const options = { useNewUrlParser: true };

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds157762.mlab.com:57762/<databasename>', options,
    function (error) {
        if (error) { console.log(error); }
    });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);