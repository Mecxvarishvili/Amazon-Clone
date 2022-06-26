import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { deleteCartProduct, setCartProduc } from '../store/cart/cartActions';

const ProductQuantity = (props) => {
    const { data, qty } = props
    const [ cl, setCl ] = useState('qtyHide')
    const dispatch = useDispatch()

    const localQty = new Array( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    return (
        <div className="qtyCont" >
            <div onClick={() => setCl("qtyShow")} >Qty: {qty}</div>
            <div onClick={() => setCl("qtyHide")} className={cl} >
                {!props.setQty && <div onClick={() => {dispatch(deleteCartProduct(data.id))}} >0 (delete)</div>}
                {localQty.map((el, index) => {
                    return <div key={index} onClick={() => {
                        if(!props.setQty){dispatch(setCartProduc(data, el))}
                        else { props.setQty(el)}
                    }} >{el}</div>
                })}
            </div>
        </div>
    );
};

export default ProductQuantity;