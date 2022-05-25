import React from 'react';

const CartPage = () => {
    const arr = [1,2]
    return (
        <div className="cartPage" >
            {!arr.length ?
            <>
                <div className="cartProductsCont" >
                    <div className="cartTitle" >Shopping Cart</div>
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