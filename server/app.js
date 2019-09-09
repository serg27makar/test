require('module-alias/register');
const express = require('express');
const app = express();
const { userValidator, loginValidators } = require('./services/validator');
const UserController = require('./controllers/users-controller');

app.use(express.json());

app.get('/hello', (req, res, next) => {
    // res.send('Hello');
    console.log('step 1');
    next();
}, (req, res, next) => {
    res.send('Hello');
    console.log('step 2')
});

app.post('/api/signup', userValidator, UserController.create);
app.post('/api/login', loginValidators, UserController.login);

app.listen(4000, () => {
    console.log('Server started...')
});
