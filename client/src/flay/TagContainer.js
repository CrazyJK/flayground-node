import Tag from './Tag';

function TagContainer(props) {
	// flay의 tag id 배열
	const flayTagIds = props.flay.video.tags.map((tag) => tag.id);
	console.debug('flay의 tag id 배열', flayTagIds);

	function handleTag(tag, checked) {
		const isContains = props.flay.video.tags.filter((value) => value.id === tag.id).length > 0;
		console.debug('토글된 체크', tag, checked, '포함 여부', isContains);

		if (isContains && !checked) {
			const modifiedTags = removeTag(props.flay.video.tags, tag);
			props.handleTag(modifiedTags);
		} else if (checked) {
			const modifiedTags = [tag, ...props.flay.video.tags];
			props.handleTag(modifiedTags);
		} else {
			console.error('상태 이상!!!!!');
		}
	}

	return (
		<div className="f-h f-w f-g-1 r-c">
			{props.tags.map((tag) => (
				<Tag key={props.flay.opus + '-' + tag.id} tag={tag} isChecked={flayTagIds.indexOf(tag.id) > -1} handleTag={handleTag} />
			))}
		</div>
	);
}

export default TagContainer;

function removeTag(list, tag) {
	const tagArray = [];
	for (const element of list) {
		if (element.id !== tag.id) {
			tagArray.push(element);
		}
	}
	return tagArray;
}
