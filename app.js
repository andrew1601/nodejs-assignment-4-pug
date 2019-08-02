const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(routes);

app.use('/', (req, res, next) => {
    res.render('error', {pageTitle: 'Error', statusCode: 404, statusText: 'Page Not Found'})
})

app.listen(3333);