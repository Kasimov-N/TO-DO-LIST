import React from 'react'
import Item from './item'
function Tasks() {
  return (
    <div className="Tasks">
      <nav>
        <h1 className='TextTask'>All Tasks</h1>
        <div className="img">
          <img src="https://assets.website-files.com/617a903d602ce83f7c565714/6228b5a8cd7aad2465a6627a_134216_menu_lines_hamburger_icon-p-2600.png" alt="" />
      <div className="Menu">
        <div className="item1"><h3>All</h3></div>
        <div className="item1"><h3>Groceries</h3></div>
        <div className="item1"><h3>College</h3></div>
        <div className="item1"><h3>Payments</h3></div>
      </div>
        </div>
      </nav>
      <input type="text" placeholder='Add a new task insdie ‘All’ category' className="AddTask" />
      <div className="items">
        <Item text='Get a new helmet' />
        <Item text='Purchase Milk & Corn Flakes' />
        <Item text='Pay mortgage' />
        <Item text='Complete Assignments' />
        <Item text='Replace laptop’s screen' />
      </div>
    </div>
  )
}

export default Tasks