function Tag(props) {
	function handleChange(e) {}

	return (
		<label className="react-component">
			<input type="checkbox" id={props.tag.id} checked={props.flayTagIds.indexOf(props.tag.id) > -1} onChange={handleChange} />
			<span>{props.tag.name}</span>
		</label>
	);
}

export default Tag;
