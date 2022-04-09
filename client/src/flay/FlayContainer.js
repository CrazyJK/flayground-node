import { useState } from 'react';
import { useData } from '../lib/useData';
import axios from 'axios';

import './Flay.css';
import Flay from './Flay';
import FlayFilter from './FlayFilter';
import PagingContainer from '../page/PagingContainer';

function FlayContainer() {
	// 필터 조건
	const [filter, setFilter] = useState({});
	function handleFilter(filterContext) {
		console.log('[FlayContainer] handleFilter', filterContext);
		setFilter(filterContext);
	}

	// 페이징
	const [pageIndex, setPageIndex] = useState(0);
	function handlePageClick(pageIndex) {
		setPageIndex(pageIndex);
	}

	let flayList = [];
	let tagList = [];
	const { loading, data, error, reload } = useData(async () => {
		return await Promise.all([axios.get('/api/flay/list'), axios.get('/api/tag')]);
	});

	if (!loading && !!data && !error) {
		flayList = data[0].data || [];
		tagList = data[1].data || [];

		// filter
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

		// sort
		if (flayList.length > 0) {
			flayList.sort((f1, f2) => f2.release.localeCompare(f1.release));
		}
		console.log('filtered flay list length', flayList.length);
	}

	return (
		<div className="flay-container">
			<div className="filter-wrap">
				<FlayFilter filterContext={filter} handleFilter={handleFilter} reload={reload} />
			</div>
			{!loading && !!data && !error && flayList.length > 0 && (
				<>
					<div className="flay-wrap">
						<Flay flay={flayList[pageIndex]} tags={tagList} />
					</div>
					<div className="paging-wrap">
						<PagingContainer curr={pageIndex} max={flayList?.length} offset={5} handleClick={handlePageClick} />
					</div>
				</>
			)}
		</div>
	);
}

export default FlayContainer;

function isEmptyObject(param) {
	return Object.keys(param).length === 0 && param.constructor === Object;
}
