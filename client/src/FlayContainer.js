import { useState } from 'react';
import axios from 'axios';
import { useData } from './lib/useData';

import Flay from './Flay';
import PagingContainer from './PagingContainer';
import FlayFilter from './FlayFilter';

async function callFlayList() {
	const response = await axios.get('/api/flay/list');
	return response.data;
}

async function callTagList() {
	const response = await axios.get('/api/tag');
	return response.data;
}

function isEmptyObject(param) {
	return Object.keys(param).length === 0 && param.constructor === Object;
}

function FlayContainer() {
	// 필터링
	const [filter, setFilter] = useState({});
	function handleFilter(filterContext) {
		console.log('[FlayContainer] handleFilter', filterContext);
		setFilter(filterContext);
	}

	// 목록 구해서 filtering 하기
	const { loading, data, error, reload } = useData(callFlayList);
	console.log('[FlayContainer] flayList', loading, !!data, error);

	let flayList;
	if (!loading && !!data && !error) {
		console.log('[FlayContainer] filter isEmptyObject', isEmptyObject(filter));
		if (!isEmptyObject(filter)) {
			flayList = data.filter((flay) => {
				if (filter.keyword) {
					const flayFullText = `${flay.studio} ${flay.opus} ${flay.title} ${flay.actress.join(' ')} ${flay.release} `;
					if (flayFullText.indexOf(filter.keyword) === -1) {
						return false;
					}
				}
				if (!filter.rank0 && flay.video.rank === 0) {
					return false;
				}
				if (!filter.rank1 && flay.video.rank === 1) {
					return false;
				}
				if (!filter.rank2 && flay.video.rank === 2) {
					return false;
				}
				if (!filter.rank3 && flay.video.rank === 3) {
					return false;
				}
				if (!filter.rank4 && flay.video.rank === 4) {
					return false;
				}
				if (!filter.rank5 && flay.video.rank === 5) {
					return false;
				}
				return true;
			});
		} else {
			flayList = data;
		}

		console.log('flayList.length', flayList.length);
		if (flayList.length > 0) {
			flayList.sort((f1, f2) => f2.release.localeCompare(f1.release));
		}
	}

	// 페이징
	const [pageIndex, setPageIndex] = useState(Math.round(Math.random() * (flayList?.length || 0)));
	function handlePageClick(pageIndex) {
		setPageIndex(pageIndex);
	}

	const tagData = useData(callTagList)?.data;
	console.log('tagData.length', tagData?.length);

	return (
		<div className="flay-container">
			<div className="filter-wrap box-shadow">
				<FlayFilter filterContext={filter} handleFilter={handleFilter} reload={reload} />
			</div>
			{!loading && !!data && !error && flayList.length > 0 && (
				<>
					<div className="flay-wrap">
						<Flay flay={flayList[pageIndex]} tags={tagData} />
					</div>
					<div className="paging-wrap">
						<PagingContainer curr={pageIndex} size={flayList?.length} handleClick={handlePageClick} />
					</div>
				</>
			)}
		</div>
	);
}

export default FlayContainer;
