const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home Page',
        path: '/'
    });
});

router.post('/users', (req, res, next) => {
    users.push(req.body);
    res.redirect('/users');
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users Page',
        path: '/users',
        users
    });
});

module.exports = router;