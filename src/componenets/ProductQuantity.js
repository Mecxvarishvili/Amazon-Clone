import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setQtyFromCart } from '../store/cart/cartActions';

const ProductQuantity = (props) => {
    const { data, qty } = props
    const [ nQty, setQty ] = useState(qty)
    const [ input, setInput] = useState(qty)
    const [ qtyType, setQtyType ] = useState(qty)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!props.setQty) {
        dispatch(setQtyFromCart(data.id, nQty))
        }
    }, [nQty])
    
    const setAction = (e) => {
        if(props.setQty) {
            props.setQty(parseInt(e.target.value))
        } else {
            if(e.target.value === "i") {
                setQtyType(99999999999)
                setInput(nQty)
            } else {
                setQty(parseInt(e.target.value))
            }
        }
    }

    return (
        <div className="qtyCont" >
            {parseInt(qtyType) < 10 ?
            <select className="qtySelect" defaultValue={nQty} onChange={(e) => {setAction(e)}} >
                {!props.setQty && <option value="0" >0 (delete)</option>}
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
                <option value="9" >9</option>
                {!props.setQty && <option value="i" >10 +</option>}
            </select>
            :
            <>
                <input className="qtyInput" type="number" defaultValue={input} onChange={(e) => {if(e.target.value === ""){setInput(0)}else{setInput(parseInt(e.target.value))}}}/>
                {qtyType !== input &&  <button type="submit" className="qtyButton" onClick={() => {setQty(input); setQtyType(input)}}>Update</button>}
            </>
            }
        </div>
    );
};

export default ProductQuantity;