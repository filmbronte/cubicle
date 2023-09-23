const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 42069;

expressConfig(app);

handlebarsConfig(app);

app.use(homeController);

//app.get('/create', (req, res) => {
//	res.render('create');
//});
//app.get('/about', (req, res) => {
//	res.render('about');
//});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
