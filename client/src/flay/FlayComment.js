import { useState } from 'react';

function FlayComment(props) {
	const [comment, setComment] = useState(props.comment || '');
	const handleChangeComment = (e) => {
		setComment(e.target.value);
	};
	const handleInputComment = (e) => {
		if (e.keyCode === 13) {
			console.log('comment enter', e.keyCode, e.target.value);
			props.handleComment(e.target.value);
		}
	};

	return <input type="text" value={comment} onChange={handleChangeComment} onKeyUp={handleInputComment} placeholder="Comment" className="ft-l t-c" />;
}

export default FlayComment;
