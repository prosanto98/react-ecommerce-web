import React from 'react';
import Data from "../products.json"

const ShopCategory = ({ filterItem, setItem, menuItems, setproducts, selectedCategory }) => {
    return (
        <>
            <div className='widget-header'>
                <h5 className='ms-2'>All Categories</h5>
            </div>
            <div>
                <button onClick={() => setproducts(Data)} className={`m-2 ${selectedCategory === "All" ?
                    "bg-warning" : ""}`}>All</button>
                {
                    menuItems && menuItems.map((val, id) => (
                        <button
                            className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
                            key={id}
                            onClick={() => filterItem(val)}>
                            {val}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default ShopCategory;
