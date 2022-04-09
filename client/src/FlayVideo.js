import FlayRank from './FlayRank';

function FlayVideo(props) {
	console.log('[FlayVideo] props.video', props.video);

	return (
		<>
			<div className="flay-video">
				<label>
					<FlayRank rank={props.video.rank} />
				</label>
				<label className="box-shadow">Play {props.video.play}</label>
				<label className="box-shadow">{new Date(props.video.lastAccess).toLocaleDateString()}</label>
			</div>
			<div>
				<p className="box-shadow">{props.video.comment}</p>
				<details className="box-shadow">
					<summary>{props.video.title}</summary>
					<p>{props.video.desc}</p>
				</details>
			</div>
		</>
	);
}

export default FlayVideo;
