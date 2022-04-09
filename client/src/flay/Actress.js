import { useState, useEffect } from 'react';

function Actress(props) {
	const [isFavorite, setIsFavorite] = useState(props.actress.favorite);

	function handleChangeFavorite(e) {
		setIsFavorite(e.target.checked);
	}

	useEffect(() => {
		console.log('actress favorite changed', isFavorite);
	}, [isFavorite]);

	return (
		<div className="actress react-component">
			<label>{props.actress.name}</label>
			<label className="actress-favorite">
				<input type="checkbox" checked={isFavorite} onChange={handleChangeFavorite} />
				<span>{isFavorite ? 'favorite' : 'noFavorite'}</span>
			</label>
			<label>{props.actress.localName}</label>
			<label>{props.actress.birth}</label>
			<label>{props.actress.debut}</label>
			<label>{props.actress.body}</label>
			<label>{props.actress.height}</label>
		</div>
	);
}

export default Actress;
