import { useState } from 'react';

function FlayFile(props) {
	const { movieSize, subtitlesSize } = {
		movieSize: props.flay.files.movie.length,
		subtitlesSize: props.flay.files.subtitles.length,
	};

	const files = [props.flay.files.cover, ...props.flay.files.movie, ...props.flay.files.subtitles];

	const [isToggle, setIsToggle] = useState(false);
	const handleFilesClick = (e) => {
		setIsToggle(!isToggle);
	};

	function handleSubClick() {
		if (props.flay.files.subtitles.length === 0) {
			console.log('TODO 자막 찾기 팝업 열기', props.flay.opus);
		}
	}

	function handleDeleteBtnClick(e) {
		const selectedFileIndex = e.target.dataset.index;
		props.handleDeleteFile(files[selectedFileIndex]);
	}

	function handleOpenFile(e) {
		console.log('TODO 클릭한 파일 탐색기로 열기', files[e.target.dataset.index]);
	}

	return (
		<div className="r-c">
			<div className="my-2 f-h">
				<button type="button" onClick={props.handlePlay} className="ft-l p-1">
					{movieSize > 0 ? 'Movie' : 'noMovie'}
				</button>
				<button type="button" onClick={handleSubClick} className="ft-l p-1">
					{subtitlesSize > 0 ? 'Sub' : 'noSub'}
				</button>
				<button type="button" onClick={handleFilesClick} className="ft-l p-1">
					<i className="fa fa-folder-open"></i>
				</button>
			</div>
			{isToggle && (
				<div className="my-2">
					{files.map((file, index) => (
						<div className="f-h jc-sb ft-s my-1" key={index}>
							<label className="f-1-1-a">{file.path}</label>
							<label className="f-1-1-a n-w" title={file.name} onClick={handleOpenFile} data-index={index}>
								{getOnlyName(file.name)}
							</label>
							<label className="ws-no">{prettySize(file.size)}</label>
							<label>{file.ext.substring(1)}</label>
							{index !== 0 && (
								<button className="c-red ft-n" title="delete this file" onClick={handleDeleteBtnClick} data-index={index}>
									<i className="fa fa-times" data-index={index}></i>
								</button>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default FlayFile;

const KB = 1024,
	MB = KB * KB,
	GB = MB * KB,
	TB = GB * KB;

function prettySize(length) {
	if (length < KB) return length + ' bytes';
	else if (length < MB) return (length / KB).toFixed(0) + ' kB';
	else if (length < GB) return (length / MB).toFixed(0) + ' MB';
	else if (length < TB) return (length / GB).toFixed(1) + ' GB';
	else return (length / TB).toFixed(2) + ' TB';
}

function getOnlyName(name) {
	const last = name.lastIndexOf('.');
	if (last === -1) {
		return name;
	} else {
		return name.substring(0, last);
	}
}
