import Actress from './Actress';

function ActressContainer(props) {
    console.log('[ActressContainer] props.list', props.list);

    const actressList = props.list?.map(actress => (<Actress actress={actress} key={actress.name} />));

    
    return (
        <div className='actress-wrap'>
            {actressList}
        </div>
    );
}

export default ActressContainer;