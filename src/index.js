const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
const PORT = 42069;

expressConfig(app);

handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeController);
app.get('*', (req, res) => {
	res.redirect('/notfound')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
