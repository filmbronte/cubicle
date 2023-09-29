const router = require('express').Router();

router.get('/create', (res, req) => {
	req.render('accessory/create');
})

module.exports = router;
