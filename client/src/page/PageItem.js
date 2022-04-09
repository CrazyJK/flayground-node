
function PageItem(props) {
    const { pageIndex, curr } = {
        pageIndex: 0,
        curr: 0,
        ...props
    }
    
    function handleClick(e) {
        console.log('[PageItem] click', e.target.innerText);
        props.handleClick(parseInt(e.target.innerText) - 1);
    }
    
    return (
        <button className={'page-item' + (pageIndex === curr ? ' active' : '')} onClick={handleClick}>
            {props.pageIndex + 1}
        </button>
    );
}

export default PageItem;