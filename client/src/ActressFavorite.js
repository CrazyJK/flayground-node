import { useEffect, useState } from 'react';

function ActressFavorite(props) {
	const { name, favorite } = {
		name: '',
		favorite: false,
		...props
	};
	console.log(`[ActressFavorite] name=[${name}] favorite=${favorite}`);

	const [isFavorite, setIsFavorite] = useState(favorite);

	function handleChecked(e) {
		console.log('[ActressFavorite] handleChecked', e.target.checked, 'will be re-rendered');
		setIsFavorite(e.target.checked);
	}

	useEffect(() => {
		console.log(`[ActressFavorite.useEffect] name=[${name}] favorite[${isFavorite}] changed. will be update`);
	});

	return (
		<label className='actress-favorite'>
			<input type="checkbox" name="favorite" checked={isFavorite} onChange={handleChecked} />
			<span>{isFavorite ? 'favorite' : 'noFavorite'}</span>
		</label>
	);
}

export default ActressFavorite;
