function FlayCover(props) {
	const { opus } = {
		opus: '',
		...props,
	};

	return <div className="flay-cover" style={{ backgroundImage: 'url(/api/cover/' + opus + ')' }}></div>;
}

export default FlayCover;
