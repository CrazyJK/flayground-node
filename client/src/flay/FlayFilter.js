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
		<div className="f-h py-2 r-c ft-l">
			<div>
				<input type="search" id="keyword" onKeyUp={handleSearch} placeholder="Search..." className="lh-16" />
			</div>
			<div>
				<label className="mr-1">
					<input type="checkbox" id="rank0" onChange={handleRank} checked={filterContext.rank0} />
					<span>
						<i className="fa fa-circle"></i>
					</span>
				</label>
				<label className="mr-1">
					<input type="checkbox" id="rank1" onChange={handleRank} checked={filterContext.rank1} />
					<span>
						<i className="fa fa-star"></i>
					</span>
				</label>
				<label className="mr-1">
					<input type="checkbox" id="rank2" onChange={handleRank} checked={filterContext.rank2} />
					<span>
						<i className="fa fa-star"></i>
					</span>
				</label>
				<label className="mr-1">
					<input type="checkbox" id="rank3" onChange={handleRank} checked={filterContext.rank3} />
					<span>
						<i className="fa fa-star"></i>
					</span>
				</label>
				<label className="mr-1">
					<input type="checkbox" id="rank4" onChange={handleRank} checked={filterContext.rank4} />
					<span>
						<i className="fa fa-star"></i>
					</span>
				</label>
				<label>
					<input type="checkbox" id="rank5" onChange={handleRank} checked={filterContext.rank5} />
					<span>
						<i className="fa fa-star"></i>
					</span>
				</label>
			</div>
			<div>
				<button onClick={props.reload} className="ft-l">
					<i className="fa fa-sync"></i>
				</button>
			</div>
		</div>
	);
}

export default FlayFilter;
