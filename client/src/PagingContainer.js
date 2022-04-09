import PageItem from './PageItem';

function PagingContainer(props) {
	const { curr, size } = {
		curr: 0,
		size: 1,
		...props,
	};

	const start = Math.max(0, curr - 5);
	const end = Math.min(size, curr + 6);

	let pagings = [];
	if (start > 0) {
		pagings.push(<PageItem pageIndex={0} curr={curr} key={0} handleClick={props.handleClick} />);
	}
	for (let i = start; i < end; i++) {
		pagings.push(<PageItem pageIndex={i} curr={curr} key={i} handleClick={props.handleClick} />);
	}
	if (end < size) {
		pagings.push(<PageItem pageIndex={size - 1} curr={curr} key={size - 1} handleClick={props.handleClick} />);
	}

	return <div className="pagination">{pagings}</div>;
}

export default PagingContainer;
