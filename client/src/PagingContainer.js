import PageItem from './PageItem';

function PagingContainer(props) {
    const { curr, size } = {
        curr: 0,
        size: 1,
        ...props
    }
    
    let pagings = [];
    for (let i = 0; i < size; i++) {
        pagings.push(
            <PageItem pageIndex={i} curr={curr} key={i} handleClick={props.handleClick} />
        )
    }

    
    return (
        <div className='pagination'>
            {pagings}
        </div>
    );
}

export default PagingContainer;