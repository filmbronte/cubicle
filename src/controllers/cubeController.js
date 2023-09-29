const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
	res.render('create')
})
router.get('/:cubeId/details', async (req, res) => {
	const cube = await cubeManager.getOne(req.params.cubeId).lean();

	if (!cube) {
		return res.redirect('/notfound')
	}
	res.render('details', { cube });
})

router.post('/create', async (req, res) => {
	const { name, description, imageUrl, difficultyLevel } = req.body;

	cubeManager.create({
		name,
		description,
		imageUrl,
		difficultyLevel: Number(difficultyLevel)
	});
	res.redirect('/');
})

router.get('/:cubeId/attach-accessory', async (req, res) => {
	const cube = await cubeManager.getOne(req.params.cubeId).lean();
	const accessories = await accessoryManager.getOthers(cube.accessories).lean();

	const hasAccessories = accessories.length > 0;

	res.render('accessory/attach', { cube, accessories, hasAccessories });
})

router.post('/:cubeId/attach-accessory', async (req, res) => {
	const { accessory: accessoryId } = req.body;
	const cubeId = req.params.cubeId;

	await cubeManager.attachAccessory(cubeId, accessoryId)

	res.redirect(`/cubes/${cubeId}/details`);
})

module.exports = router;
