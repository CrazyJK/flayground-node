import FlayCover from './FlayCover';
import FlayVideo from './FlayVideo';
import FlayFile from './FlayFile';
import ActressContainer from './ActressContainer';
import TagContainer from './TagContainer';

function Flay(props) {
	console.log('[Flay] props.flay', props.flay);

	return (
		<div className="flay react-component">
			<div className="flay-info">
				<label>{props.flay.studio}</label>
				<label>{props.flay.opus}</label>
				<label>{props.flay.release}</label>
			</div>
			<div>
				<label className="flay-title">{props.flay?.title}</label>
			</div>
			<FlayCover opus={props.flay.opus} />
			<ActressContainer actress={props.flay.actress} />
			<FlayFile files={props.flay.files} />
			<FlayVideo video={props.flay.video} />
			<TagContainer tags={props.tags} flay={props.flay} />
		</div>
	);
}

export default Flay;
