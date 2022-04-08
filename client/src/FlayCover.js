
function FlayCover(props) {
    const { opus } = {
        opus: '',
        ...props
    }

    return (
        <div className='flay-cover' style={{backgroundImage: 'url(/' + opus + '.png)'}}></div>
    );
}

export default FlayCover;