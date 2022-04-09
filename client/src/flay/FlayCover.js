function FlayCover(props) {
	const { opus } = {
		opus: '',
		...props,
	};

	return <div className="cover r-c" style={{ backgroundImage: 'url(/api/cover/' + opus + ')' }}></div>;
}

export default FlayCover;
