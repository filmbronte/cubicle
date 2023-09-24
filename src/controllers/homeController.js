const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/', (req, res) => {
	const cubes = cubeManager.getAll();

	console.log(cubes);
	res.render('index', {cubes});
});
router.get('/about', (req, res) => {
	res.render('about');
});
router.get('/*', (req, res) => {
	res.render('404');
});

module.exports = router; 
