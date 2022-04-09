import FlayRank from './FlayRank';
import FlayComment from './FlayComment';

function FlayVideo(props) {
	console.debug('[FlayVideo] props.video', props.video);

	return (
		<div className="r-c">
			<div className="f-h m-1">
				<label>
					<FlayRank rank={props.video.rank} handleRank={props.handleRank} />
				</label>
				<label>
					{props.video.play + ''}
					<small>Play</small>
				</label>
				<label>{new Date(props.video.lastAccess).toLocaleDateString()}</label>
			</div>
			<div className="my-1 t-c">
				<FlayComment video={props.video.comment} handleComment={props.handleComment} />
			</div>
			{props.video.title && props.video.title !== '' && (
				<div className="my-1">
					<details>
						<summary className="n-w">{props.video.title}</summary>
						<div className="ft-s">{props.video.desc}</div>
					</details>
				</div>
			)}
		</div>
	);
}

export default FlayVideo;
