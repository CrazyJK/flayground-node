import ActressFavorite from './ActressFavorite';

function Actress(props) {
    
    return (
        <div className="actress">
            <label>{props.actress?.name}</label>
            <ActressFavorite name={props.actress?.name} favorite={props.actress?.favorite} />
        </div>
    );
}

export default Actress;
