import ActressContainer from './ActressContainer';
import FlayCover from './FlayCover';
import FlayVideo from './FlayVideo';

function Flay(props) {
	console.log('[Flay] props.flay', props.flay);

	return (
		<div className='flay'>
			<h2 className='flay-title'>{props.flay?.opus}</h2>
			<FlayVideo video={props.flay?.video} />
			<FlayCover opus={props.flay?.opus} />
			<ActressContainer list={props.flay?.actress} />
		</div>
	);
}

export default Flay;
