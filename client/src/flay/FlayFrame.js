import { useState } from 'react';

import Flay from './Flay';
import FlayFilter from './FlayFilter';
import PagingContainer from '../page/PagingContainer';

function FlayFrame(props) {
	// 페이징
	const [pageIndex, setPageIndex] = useState(props.randomIndex);
	const handlePageClick = (pageIndex) => {
		setPageIndex(pageIndex);
	};

	return (
		<>
			<div className="mb-2 bg-dark w-f r-c">
				<FlayFilter filterContext={props.filter} handleFilter={props.handleFilter} reload={props.reload} />
			</div>
			<div className="f-1-1-a f-h r-c">
				{props.flayList.length > 0 && (
					<>
						<Flay key={props.flayList[pageIndex].opus} flay={props.flayList[pageIndex]} tags={props.tagList} actressList={props.actressList} />
					</>
				)}
				{props.flayList.length === 0 && (
					<>
						<div>Not found flay</div>
					</>
				)}
			</div>
			<div className="w-f my-2 r-c">
				{props.flayList.length > 0 && (
					<>
						<PagingContainer curr={pageIndex} max={props.flayList?.length} offset={5} handleClick={handlePageClick} />
					</>
				)}
			</div>
		</>
	);
}

export default FlayFrame;
