import { useState } from 'react';
import axios from 'axios';
import { useData } from "./lib/useData";

import Flay from './Flay';
import PagingContainer from './PagingContainer';
import FlayFilter from './FlayFilter';

async function callApi() {
	const response = await axios.get('/api');
	return response.data;
}

function isEmptyObject(param) {
	return Object.keys(param).length === 0 && param.constructor === Object;
}

function FlayContainer() {
	// 페이징
	const [pageIndex, setPageIndex] = useState(0);
	function handlePageClick(pageIndex) {
		setPageIndex(pageIndex);
	}

	// 필터링
	const [filter, setFilter] = useState({});
	function handleFilter(filterContext) {
		console.log('[FlayContainer] handleFilter', filterContext);
		setFilter(filterContext);
	}

	// 목록 구해서 filtering 하기
	const { loading, data, error, reload } = useData(callApi);
	console.log('[FlayContainer] flayList', loading, data, error);
	
	let flayList;
	if (!loading && !!data && !error) {
		flayList = data;
		
		console.log('[FlayContainer] filter isEmptyObject', isEmptyObject(filter));
		if (!isEmptyObject(filter)) {
			flayList = data.filter((flay) => {
				if (filter.keyword && flay.toString().indexOf(filter.keyword) === -1) {
					return false;
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
			})
		}
	}
	
	
    return (
		<div className='flay-container'>
			<div className='filter-wrap'>
				<FlayFilter filterContext={filter} handleFilter={handleFilter} reload={reload} />
			</div>
			<div className='flay-wrap'>
				{!loading && !!data && !error && <Flay flay={flayList[pageIndex]} />}
			</div>
			<div className='paging-wrap'>
				<PagingContainer curr={pageIndex} size={flayList?.length} handleClick={handlePageClick} />
			</div>
		</div>
    );
}

export default FlayContainer;
