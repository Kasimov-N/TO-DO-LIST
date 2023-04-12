import React from 'react'

function Item(a) {
    return (
        <div className="item">
            <input className='itemCheck' type="checkbox" />
            <h2 className="itemText">{a.text}</h2>
            <button className='ItemBtn'>Uncategorized </button>
        </div>
    )
}

export default Item