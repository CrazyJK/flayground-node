const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({ test: 'response of api', favorite: true });
});

module.exports = router;
