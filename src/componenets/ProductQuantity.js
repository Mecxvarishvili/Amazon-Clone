import React, { useState } from 'react';

const ProductQuantity = (props) => {
    const { data, qty } = props
    const [ cl, setCl ] = useState('qtyHide')

    const localQty = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    return (
        <div className="qtyCont" >
            <div onClick={() => setCl("qtyShow")} >Qty: {qty}</div>
            <div onClick={() => setCl("qtyHide")} className={cl} >
                {
                    localQty.map((el, index) => {
                        return <div key={index} onClick={() => props.setQty(el)} >{el}</div>
                    })
                }
            </div>
        </div>
    );
};

export default ProductQuantity;