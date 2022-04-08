const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json([
		{
			opus: 'logo192',
			video: {
				rank: 0,
				play: 1
			},
			actress: [
				{
					name: 'jone due',
					favorite: false,
				},
				{
					name: 'jone kain',
					favorite: true,
				},
			],
		},
		{
			opus: 'logo512',
			video: {
				rank: 1,
				play: 10
			},
			actress: [
				{
					name: 'jane due',
					favorite: true,
				},
			],
		},
	]);
});

module.exports = router;
