const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.use(homeController);
router.use('/cubes', cubeController);
router.get('*', (req, res) => {
	res.redirect('/notfound')
})

module.exports = router;
