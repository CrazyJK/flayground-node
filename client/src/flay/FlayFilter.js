function FlayFilter(props) {
	const filterContext = {
		keyword: '',
		rank0: true,
		rank1: true,
		rank2: true,
		rank3: true,
		rank4: true,
		rank5: true,
		...props.filterContext,
	};

	function handleSearch(e) {
		if (e.keyCode !== 13) return;

		filterContext[e.target.id] = e.target.value.trim();
		console.log('handleSearch', e.keyCode, e.target.id, e.target.value, filterContext);
		props.handleFilter(filterContext);
	}

	function handleRank(e) {
		filterContext[e.target.id] = e.target.checked;
		console.log('handleRank', e.target.id, e.target.checked, filterContext);
		props.handleFilter(filterContext);
	}

	return (
		<div className="filter react-component">
			<div className="filter-item">
				<input type="search" id="keyword" onKeyUp={handleSearch} />
			</div>
			<div className="filter-item">
				<label>
					<input type="checkbox" id="rank0" onChange={handleRank} checked={filterContext.rank0} />
					<span>0</span>
				</label>
				<label>
					<input type="checkbox" id="rank1" onChange={handleRank} checked={filterContext.rank1} />
					<span>1</span>
				</label>
				<label>
					<input type="checkbox" id="rank2" onChange={handleRank} checked={filterContext.rank2} />
					<span>2</span>
				</label>
				<label>
					<input type="checkbox" id="rank3" onChange={handleRank} checked={filterContext.rank3} />
					<span>3</span>
				</label>
				<label>
					<input type="checkbox" id="rank4" onChange={handleRank} checked={filterContext.rank4} />
					<span>4</span>
				</label>
				<label>
					<input type="checkbox" id="rank5" onChange={handleRank} checked={filterContext.rank5} />
					<span>5</span>
				</label>
			</div>
			<div>
				<button onClick={props.reload}>reload</button>
			</div>
		</div>
	);
}

export default FlayFilter;
