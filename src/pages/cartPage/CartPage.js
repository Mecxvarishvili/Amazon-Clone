import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const CartPage = () => {

    /* const [ cartData, setData ] = useState(useSelector((state) => state.cartReducer)) */
    const cartData = useSelector((state) => state.cartReducer)
    /* useEffect(() => {
        setData(cartSelector)
    }, [cartSelector]) */
    console.log(cartData)

    return (
        <div className="cartPage" >
            {cartData.length ?
            <>
                <div className="cartProductsCont" >
                    <div className="cartTitle" >Shopping Cart</div>
                    <div className="forPrice">Price</div>
                    <div className="cardsCont" >
                        {cartData && cartData.map(data => {
                            return<CartCard data={data} key={data.id} />
                        })}
                    </div>
                </div>
                <div className="totalPriceCont" >
                    <div className='inTotalPriceCont' >
                        <div className="PriceText" >Subtotal ({} item): <span>$200</span></div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </>
            :
            <>
                <div className="noProduct" >
                    <div className="noProductImg" >
                        <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
                    </div>
                    <div className="rightCont" >
                        <div>Your Amazon Cart is empty</div>
                        <div className="buttonsCont">
                            <button className="Button-A signInBtn" >sign in to your account</button>
                            <button className="Button-A signInBtn">Sign up now</button>
                        </div>
                    </div>
                </div>
                <div className="totalPriceCont dontShow" ></div>
            </>
            }
        </div>
    );
};

export default CartPage;