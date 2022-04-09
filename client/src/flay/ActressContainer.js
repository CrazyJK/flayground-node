import Actress from './Actress';

function ActressContainer(props) {
	console.debug('[ActressContainer] actress names', props.actress);

	const actressList = props.actressList.filter((actress) => props.actress.includes(actress.name));

	/* -- 컴포넌트로 부터 전달되는 함수 -- */
	function handleUpdate(actress) {
		for (let element of props.actressList) {
			if (element.name === actress.name) {
				element = actress;
			}
		}
		console.log('TODO 배우 정보 업데이트', actress);
	}

	return (
		<div className="r-c">
			<div className="f-v">
				{actressList.map((actress) => (
					<Actress key={actress.name} actress={actress} handleUpdate={handleUpdate} />
				))}
			</div>
		</div>
	);
}

export default ActressContainer;
