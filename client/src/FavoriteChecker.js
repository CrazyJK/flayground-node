import { useEffect, useState } from 'react';

function FavoriteChecker(props) {
	const { favorite } = {
		favorite: false,
		...props.flay,
	};
	console.log('[FavoriteChecker] favorite', favorite);

	const [isFavorite, setIsFavorite] = useState(favorite);

	function handleChecked(e) {
		console.log('[FavoriteChecker] handleCheck', e.target.checked);
		setIsFavorite(e.target.checked);
	}

	useEffect(() => {
		console.log('[FavoriteChecker] useEffect change', isFavorite);
	}, [isFavorite]);

	return (
		<div>
			<pre>{JSON.stringify(isFavorite, null, 2)}</pre>
			<label>
				<input type="checkbox" name="favorite" checked={isFavorite} onChange={handleChecked} />
				{isFavorite ? 'favorite' : 'noFavorite'}
			</label>
		</div>
	);
}

export default FavoriteChecker;
