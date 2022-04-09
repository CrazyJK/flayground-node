import Tag from './Tag';

function TagContainer(props) {
	const flayTagIds = props.flay.video.tags.map((tag) => tag.id);
	const tagList = props.tags?.sort((t1, t2) => t1.name.localeCompare(t2.name)).map((tag) => <Tag key={tag.id} tag={tag} flayTagIds={flayTagIds} />);

	return <div className="tag-wrap react-component">{tagList}</div>;
}

export default TagContainer;
