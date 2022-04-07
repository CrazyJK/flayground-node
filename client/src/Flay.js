import { useEffect, useState } from 'react';
import FavoriteChecker from './FavoriteChecker';
import axios from 'axios';

function Flay(props) {
	console.log('[Flay] props', props);

	const [apiData, setApiData] = useState({
		favorite: true,
	});

	async function callApi() {
		const response = await axios.get('/api');
		console.log('[Flay] callApi', response.data);
		setApiData(response.data);
	}

	useEffect(() => {
		callApi();
	}, []);

	return (
		<div>
			<FavoriteChecker flay={apiData} />
		</div>
	);
}

export default Flay;
