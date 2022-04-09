import { useState } from 'react';

function Actress(props) {
	const [isFavorite, setIsFavorite] = useState(props.actress.favorite);

	function handleChangeFavorite(e) {
		setIsFavorite(e.target.checked);
		props.actress.favorite = e.target.checked;
		props.handleUpdate(props.actress);
	}

	return (
		<div className="f-h jc-sb w-f r-c mb-1">
			<label>
				<input type="checkbox" checked={isFavorite} onChange={handleChangeFavorite} />
				<span>
					<i className={isFavorite ? 'fa fa-heart' : 'fa fa-heart-o'}></i>
				</span>
			</label>
			<label className="f-1-1-a">{props.actress.name}</label>
			<label>{props.actress.localName}</label>
			<label>{props.actress.birth}</label>
			<label>{props.actress.debut}</label>
			<label>{props.actress.body}</label>
			<label>{props.actress.height}</label>
		</div>
	);
}

export default Actress;
