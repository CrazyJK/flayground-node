import { resolve } from 'path';
import { spawn } from 'child_process';
import createError from 'http-errors';

import flaySource from '../source/flaySource.js';
import videoService from './videoService.js';
import { PLAYER } from '../flayProperties.js';

export default {
	listFiles: () => {
		return flaySource.listFiles();
	},
	list: () => {
		return flaySource.list();
	},
	getMap: () => {
		return flaySource.getMap();
	},
	get: (opus) => {
		const flay = flaySource.getMap().get(opus);
		if (flay) {
			return flay;
		} else {
			throw createError(404, 'flay notfound: ' + opus);
		}
		// return flaySource.getMap().get(opus) || Error('notfound');
	},
	play: (opus) => {
		const flay = flaySource.getMap().get(opus);
		const file = flay.files.movie[0];
		const moviePath = resolve(file.path, file.name);
		// call external command
		console.log('flayService', 'play', PLAYER, moviePath);
		const player = spawn(PLAYER, [moviePath]);
		player.on('exist', (code) => {
			console.log('flayService', 'player exited', code);
		});
		// update video
		flay.video.play = flay.video.play + 1;
		flay.video.lastAccess = Date.now();
		videoService.save(flay.video);
	},
	filter: (filter) => {
		return flaySource.list().filter((flay) => {
			if (filter.keyword) {
				const flayFullText = `${flay.studio} ${flay.opus} ${flay.title} ${flay.actress.join(' ')} ${flay.release} `;
				if (flayFullText.indexOf(filter.keyword) === -1) {
					return false;
				}
			}
			if (!filter.rank0 && flay.video.rank === 0) return false;
			if (!filter.rank1 && flay.video.rank === 1) return false;
			if (!filter.rank2 && flay.video.rank === 2) return false;
			if (!filter.rank3 && flay.video.rank === 3) return false;
			if (!filter.rank4 && flay.video.rank === 4) return false;
			if (!filter.rank5 && flay.video.rank === 5) return false;

			return true;
		});
	}
};
