import FlayRank from './FlayRank';

function FlayVideo(props) {
	console.log('[FlayVideo] props.video', props.video);

	return (
		<div className="react-component">
			<div className="flay-video">
				<label>
					<FlayRank rank={props.video.rank} />
				</label>
				<label>Play {props.video.play}</label>
				<label>{new Date(props.video.lastAccess).toLocaleDateString()}</label>
			</div>
			<div>
				<p>{props.video.comment}</p>
				<details>
					<summary>{props.video.title}</summary>
					<p>{props.video.desc}</p>
				</details>
			</div>
		</div>
	);
}

export default FlayVideo;
