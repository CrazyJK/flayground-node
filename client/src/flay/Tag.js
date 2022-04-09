import { useState } from 'react';

function Tag(props) {
	const [isChecked, setIsChecked] = useState(props.isChecked);

	function handleChange(e) {
		console.log('체크 변경', props.tag.name, e.target.checked);
		setIsChecked(e.target.checked);
		props.handleTag(props.tag, e.target.checked);
	}

	return (
		<label className="ft-n p-1 r-c">
			<input type="checkbox" id={props.tag.id} checked={isChecked} onChange={handleChange} />
			<span>{props.tag.name}</span>
		</label>
	);
}

export default Tag;
