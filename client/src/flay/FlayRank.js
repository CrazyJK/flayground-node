import { useState } from 'react';

function FlayRank(props) {
	const [selectedRank, setSelectedRank] = useState(props.rank);

	function handleRank(e) {
		setSelectedRank(parseInt(e.target.value));
		props.handleRank(selectedRank);
	}

	return (
		<div className="flay-rank r-c">
			<label className="mr-1">
				<input type="radio" id="rank-1" onChange={handleRank} checked={selectedRank === -1} value={-1} />
				<span>
					<i className="fa fa-thumbs-down"></i>
				</span>
			</label>
			<label className="mr-1">
				<input type="radio" id="rank0" onChange={handleRank} checked={selectedRank === 0} value={0} />
				<span>
					<i className="fa fa-circle"></i>
				</span>
			</label>
			<label className="mr-1">
				<input type="radio" id="rank1" onChange={handleRank} checked={selectedRank === 1} value={1} />
				<span>
					<i className="fa fa-star"></i>
				</span>
			</label>
			<label className="mr-1">
				<input type="radio" id="rank2" onChange={handleRank} checked={selectedRank === 2} value={2} />
				<span>
					<i className="fa fa-star"></i>
				</span>
			</label>
			<label className="mr-1">
				<input type="radio" id="rank3" onChange={handleRank} checked={selectedRank === 3} value={3} />
				<span>
					<i className="fa fa-star"></i>
				</span>
			</label>
			<label className="mr-1">
				<input type="radio" id="rank4" onChange={handleRank} checked={selectedRank === 4} value={4} />
				<span>
					<i className="fa fa-star"></i>
				</span>
			</label>
			<label>
				<input type="radio" id="rank5" onChange={handleRank} checked={selectedRank === 5} value={5} />
				<span>
					<i className="fa fa-star"></i>
				</span>
			</label>
		</div>
	);
}

export default FlayRank;
