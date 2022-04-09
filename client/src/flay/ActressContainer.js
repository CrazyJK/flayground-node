import { useData } from '../lib/useData';
import axios from 'axios';
import Actress from './Actress';

function ActressContainer(props) {
	console.log('[ActressContainer] props.list', props.actress);

	const { loading, data, error } = useData(async () => {
		const promiseAxiosList = props.actress.map((name) => axios.get('/api/actress/' + name));
		return await Promise.all(promiseAxiosList);
	});
	console.log('[ActressContainer] actress', loading, data, error);

	return (
		<div className="react-component">
			{!loading && !!data && !error && (
				<div className="actress-wrap">
					{data.map((res) => (
						<Actress actress={res.data} key={res.data.name} />
					))}
				</div>
			)}
		</div>
	);
}

export default ActressContainer;
