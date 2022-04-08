
function FlayVideo(props) {
    
    return (
        <div className="flay-video">
            <label>Rank {props.video.rank}</label>
            <label>Play {props.video.play}</label>
        </div>
    );
}

export default FlayVideo;