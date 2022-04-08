
function FlayFilter(props) {
    const filterContext = {
        keyword: '',
        rank0: false,
        rank1: false,
        rank2: false,
        rank3: false,
        rank4: false,
        rank5: false,
        ...props.filterContext
    };
    
    function handleSearch(e) {
        console.log('[FlayFilter] search', e.keyCode, e.target.id, e.target.value);
        if (e.keyCode !== 13) return
        filterContext[e.target.id] = e.target.value;
        console.log('[FlayFilter] filterContext', filterContext);
        props.handleFilter(filterContext);
    }
    
    function handleRank(e) {
        console.log('[FlayFilter] rank', e.target.id, e.target.checked);
        filterContext[e.target.id] = e.target.checked;
        console.log('[FlayFilter] filterContext', filterContext);
        props.handleFilter(filterContext);
    }
    
    return (
        <>
            <div>
                <input type="search" id="keyword" onKeyUp={handleSearch} />
            </div>
            <div>
                <label><input type="checkbox" id="rank0" onChange={handleRank} checked={filterContext.rank0} /><span>0</span></label>
                <label><input type="checkbox" id="rank1" onChange={handleRank} checked={filterContext.rank1} /><span>1</span></label>
                <label><input type="checkbox" id="rank2" onChange={handleRank} checked={filterContext.rank2} /><span>2</span></label>
                <label><input type="checkbox" id="rank3" onChange={handleRank} checked={filterContext.rank3} /><span>3</span></label>
                <label><input type="checkbox" id="rank4" onChange={handleRank} checked={filterContext.rank4} /><span>4</span></label>
                <label><input type="checkbox" id="rank5" onChange={handleRank} checked={filterContext.rank5} /><span>5</span></label>
            </div>
            <div>
                <button onClick={props.reload}>reload</button>
            </div>
        </>
    );
}

export default FlayFilter;