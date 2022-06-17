import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import serialize from '../../serialize/serializer';
import { getCartData } from '../../store/selector';
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from '../routes';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
const CartPage = () => {

    /* const [ cartData, setData ] = useState(useSelector((state) => state.cartReducer)) */
    const cartData = useSelector(getCartData)
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
                        <div className="PriceText" >Subtotal ({serialize.totalProducts(cartData)} item): <span>${serialize.totalProductsPrice(cartData)}</span></div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </>
            :
            <>
                <div className="leftCont" >
                    <div className='noProduct' >
                        <div className='boxP' >
                            <div className="noProductImg" >
                                <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
                            </div>
                            <div className="emptyCont" >
                                <div className='emptyTitle'>Your Amazon Cart is empty</div>
                                <div className="buttonsCont">
                                    <Link to={SIGN_IN_PAGE}>
                                        <button className="signInBtn" >Sign in to your account</button>
                                    </Link>
                                    <Link to={SIGN_UP_PAGE}>
                                        <button className="signUpBtn">Sign up now</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="emptyBox" ></div>
                </div>
                <div className="totalPriceCont dontShow" ></div>
            </>
            }
        </div>
    );
};

export default CartPage;