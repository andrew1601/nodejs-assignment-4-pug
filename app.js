const express = require('express');

const app = express();

const users = [
];

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home Page',
        path: '/'
    });
});

app.post('/users', (req, res, next) => {
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users Page',
        path: '/users',
        users
    });
});

app.use('/', (req, res, next) => {
    res.render('error', {pageTitle: 'Error', statusCode: 404, statusText: 'Page Not Found'})
})

app.listen(3333);