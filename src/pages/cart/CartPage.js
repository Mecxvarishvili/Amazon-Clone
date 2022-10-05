import { useSelector } from 'react-redux';
import serialize from '../../serialize/serializer';
import { getCartData } from '../../store/selector';
import CartCard from './CartCard';

const CartPage = () => {

    const cartData = useSelector(getCartData)

    return (
        <div className="cartPage" >
            {cartData.length ?
            <>
                <div className="cartProductsCont" >
                    <div className="cartTitle" >Shopping Cart</div>
                    <div className="forPrice">Price</div>
                    <div className="cardsCont" >
                        {cartData && cartData.map(data => {
                            return <CartCard data={data} key={data.id} />
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