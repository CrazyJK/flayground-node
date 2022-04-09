import { useState } from 'react';
import { useData } from '../lib/useData';
import axios from 'axios';

import './Flay.css';
import FlayFrame from './FlayFrame';

function FlayContainer() {
	// 필터 조건
	const [filter, setFilter] = useState({});
	const handleFilter = (filterContext) => {
		console.log('handleFilter', filterContext);
		setFilter(filterContext);
	};

	const { loading, data, error, reload } = useData(async () => {
		const results = await Promise.all([axios.get('/api/flay/list'), axios.get('/api/tag'), axios.get('/api/actress')]);

		const flayList = results[0].data || [];
		const tagList = results[1].data || [];
		const actressList = results[2].data || [];

		// tag sort
		tagList.sort((t1, t2) => t1.name.localeCompare(t2.name));

		console.log(` in useData. flay=${flayList.length} tag=${tagList.length} actress=${actressList.length}`);

		return [flayList, tagList, actressList];
	});

	let flayList = [];
	let tagList = [];
	let actressList = [];
	let randomIndex = 0;

	if (!loading && !!data && !error) {
		[flayList, tagList, actressList] = data;

		// flay filter
		if (!isEmptyObject(filter)) {
			flayList = flayList.filter((flay) => {
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
		// flay sort
		if (flayList.length > 0) {
			flayList.sort((f1, f2) => f2.release.localeCompare(f1.release));
		}

		// random pageIndex
		randomIndex = Math.round(Math.random() * flayList.length);

		console.log(`out useData. flay=${flayList.length} tag=${tagList.length} actress=${actressList.length} random=${randomIndex}`);
	}

	return (
		<>
			{!loading && !error && !!data && (
				<div className="f-v h-100vh r-c">
					<FlayFrame filter={filter} handleFilter={handleFilter} flayList={flayList} tagList={tagList} actressList={actressList} randomIndex={randomIndex} reload={reload} />
				</div>
			)}
			{!loading && !!error && <div>{error}</div>}
			{loading && <div>Loading...</div>}
		</>
	);
}

export default FlayContainer;

function isEmptyObject(param) {
	return Object.keys(param).length === 0 && param.constructor === Object;
}
