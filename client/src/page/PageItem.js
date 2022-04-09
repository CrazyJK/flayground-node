function PageItem(props) {
	const { pageIndex, currentIndex } = {
		pageIndex: 0,
		currentIndex: 0,
		...props,
	};

	function handleClick(e) {
		props.handleClick(parseInt(e.target.innerText) - 1);
	}

	return (
		<button className={'page-item' + (pageIndex === currentIndex ? ' active' : '')} onClick={handleClick}>
			{props.pageIndex + 1}
		</button>
	);
}

export default PageItem;
