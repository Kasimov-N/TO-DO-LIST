import React from 'react'

function Category() {
    return (
        <div className="Category">
            <h1 className='TextCategory'>Category</h1>
            <input type="text" placeholder='Add Category' className="AllCategory" />
            <div className="Btn">
                <button className='btn1'></button>
                <button className='btn2'></button>
                <button className='btn3'></button>
                <button className='btn4'></button>
                <button className='btn5'></button>
                <button className='btn6'></button>
            </div>
            <div className="all">
                <div className="alc"></div>
                <h1 className='TextAll'> All</h1>
            </div>
            <div className="Groceries">
                <div className="groc"></div>
                <h1 className="TextGroc">Groceries</h1>
            </div>
            <div className="College">
                <div className="colc"></div>
                <h1 className="TextCollege">College</h1>
            </div>
            <div className="Payments">
                <div className="Payc"></div>
                <h1 className="texPay">Payments</h1>
            </div>
        </div>
    )
}

export default Category