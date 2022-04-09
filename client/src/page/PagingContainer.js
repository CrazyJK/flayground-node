import './Page.css';
import PageItem from './PageItem';

function PagingContainer(props) {
	const { curr, max, offset } = {
		curr: 0,
		max: 1,
		offset: 5,
		...props,
	};

	const start = Math.max(0, curr - offset);
	const end = Math.min(max, curr + offset + 1);

	let pagings = [];
	if (start > 0) {
		pagings.push(<PageItem key={0} pageIndex={0} currentIndex={curr} handleClick={props.handleClick} />);
	}
	for (let i = start; i < end; i++) {
		pagings.push(<PageItem key={i} pageIndex={i} currentIndex={curr} handleClick={props.handleClick} />);
	}
	if (end < max) {
		pagings.push(<PageItem key={max - 1} pageIndex={max - 1} currentIndex={curr} handleClick={props.handleClick} />);
	}

	return <div className="pagination r-c">{pagings}</div>;
}

export default PagingContainer;
