function FlayFile(props) {
	const { movieSize, subtitlesSize } = {
		movieSize: props.files.movie.length,
		subtitlesSize: props.files.subtitles.length,
	};

	const files = [props.files.cover, ...props.files.movie, ...props.files.subtitles];
	console.log('files', files);

	function handleMovieClick(e) {}

	function handleSubClick(e) {}

	function handleFilesClick(e) {
		// document.querySelector('.files-list')
	}

	return (
		<div className="react-component">
			<div className="files-wrap">
				<button type="button" onClick={handleMovieClick}>
					{movieSize > 0 ? 'Movie' : 'noMovie'}
				</button>
				<button type="button" onClick={handleSubClick}>
					{subtitlesSize > 0 ? 'Sub' : 'noSub'}
				</button>
				<button type="button" onClick={handleFilesClick}>
					files
				</button>
			</div>
			<div className="files-list">
				{files.map((file, index) => (
					<div className="file-item" key={index}>
						<label className="file-path">{file.path}</label>
						<label className="file-name" title={file.name}>
							{getOnlyName(file.name)}
						</label>
						<label className="file-size">{prettySize(file.size)}</label>
						<label className="file-ext">{file.ext.substring(1)}</label>
						{index !== 0 && (
							<button className="file-delete-btn" title="delete this file">
								x
							</button>
						)}
					</div>
				))}
			</div>
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
