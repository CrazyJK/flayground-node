function FlayRank(props) {
	function handleRank(e) {}

	return (
		<div className="react-component">
			<label>
				<input type="radio" id="rank-1" onChange={handleRank} checked={props.rank === -1} />
				<span>-1</span>
			</label>
			<label>
				<input type="radio" id="rank0" onChange={handleRank} checked={props.rank === 0} />
				<span>0</span>
			</label>
			<label>
				<input type="radio" id="rank1" onChange={handleRank} checked={props.rank === 1} />
				<span>1</span>
			</label>
			<label>
				<input type="radio" id="rank2" onChange={handleRank} checked={props.rank === 2} />
				<span>2</span>
			</label>
			<label>
				<input type="radio" id="rank3" onChange={handleRank} checked={props.rank === 3} />
				<span>3</span>
			</label>
			<label>
				<input type="radio" id="rank4" onChange={handleRank} checked={props.rank === 4} />
				<span>4</span>
			</label>
			<label>
				<input type="radio" id="rank5" onChange={handleRank} checked={props.rank === 5} />
				<span>5</span>
			</label>
		</div>
	);
}

export default FlayRank;
