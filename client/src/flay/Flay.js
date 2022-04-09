import FlayCover from './FlayCover';
import FlayVideo from './FlayVideo';
import FlayFile from './FlayFile';
import ActressContainer from './ActressContainer';
import TagContainer from './TagContainer';

function Flay(props) {
	console.log('[Flay] props.flay', props.flay);

	/* -- 컴포넌트로 부터 전달되는 함수 -- */
	function handlePlay() {
		console.log('TODO will be played!', props.flay.opus);
	}
	function handleDeleteFile(file) {
		console.log('TODO 지울 파일', file);
	}
	function handleRank(rank) {
		console.log('TODO rank will be updated', props.flay.opus, rank);
	}
	function handleComment(comment) {
		console.log('TODO comment update', comment);
	}
	function handleTag(tags) {
		props.flay.video.tags = tags;
		console.log('TODO 태그 전체 업데이트', props.flay.video.tags);
	}

	/* -- 자체 처리 함수 -- */
	function handleOpenVideo() {
		window.open('/api/video/' + props.flay.opus, 'video-' + props.flay.opus, 'width=300px; height=400px');
	}

	return (
		<div className="w-f ft-l r-c">
			<div className="f-h my-2 h-2rem">
				<label>{props.flay.studio}</label>
				<label onClick={handleOpenVideo}>{props.flay.opus}</label>
				<label>{props.flay.release}</label>
			</div>
			<div className="my-2 t-c ft-xxl">
				<label>{props.flay.title}</label>
			</div>
			<div className="my-2">
				<FlayCover key={props.flay.opus} opus={props.flay.opus} />
			</div>
			<div className="my-2">
				<ActressContainer actress={props.flay.actress} actressList={props.actressList} />
			</div>
			<div className="my-2">
				<FlayFile flay={props.flay} handlePlay={handlePlay} handleDeleteFile={handleDeleteFile} />
			</div>
			<div className="my-2">
				<FlayVideo video={props.flay.video} handleRank={handleRank} handleComment={handleComment} />
			</div>
			<div className="my-2">
				<TagContainer tags={props.tags} flay={props.flay} handleTag={handleTag} />
			</div>
		</div>
	);
}

export default Flay;
