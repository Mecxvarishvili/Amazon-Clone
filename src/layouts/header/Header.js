import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../img/white-logo.png"
import cartImg from "../../img/whiteCart.png"
import { CART_PAGE, HOME_PAGE, PROFILE_PAGE, SIGN_IN_PAGE } from '../../pages/routes';
import serialize from "../../serialize/serializer"
import { getCartData, getUserReducer } from '../../store/selector';
import SearchBar from './SearchBar';



const Header = () => {
    const {isLoggedIn, user} = useSelector(getUserReducer)
    const cartData = useSelector(getCartData)
    const totalProduct = serialize.totalProducts(cartData)
    if(user.name) {var userName = user.name.split(" ")[0]}
    return (
        <div className='navBar' >
            <a id="nav-top"></a>
            <div className="navTop" >
                <div className='navLeft'>
                    <div className="logo outline-hov" >
                        <Link to={HOME_PAGE}>
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="deliverCont outline-hov" >
                        <img src="https://icon-library.com/images/e958984b9c.png" />
                        <div>
                            <div className="dlvrTtl1" >Deliver to</div>
                            <div className="dlvrTtl2" >location</div>
                        </div>
                    </div>
                </div>
                <SearchBar/>
                <div className='navRight' >
                    <Link to={PROFILE_PAGE} className="signInCont outline-hov">
                        <div className="sgnT" >Hello, {user.name ? userName : "Sign in"}</div>
                        <div className="sgnB" >Account & Lists</div>                                        
                    </Link>
                    <Link to={CART_PAGE} className="cartCounterCont outline-hov" >
                        <div className='cartCont'>
                            {totalProduct > 99 ? <div className='cartCount2'>99+</div> : <div className='cartCount1'>{totalProduct}</div>}
                            <div >
                                <img src={cartImg} />
                            </div>
                        </div>
                        <div className="cartText">Cart</div>
                    </Link>
                </div>
            </div>
            <div className="navBottom" >
                <div className="navRight" >
                    <div className="navLeft" >All</div>
                    <div>Today's Deals</div>
                    <div>Customer Service</div>
                    <div>Registry</div>
                    <div>Gift Cards</div>
                    <div>Sell</div>
                </div>
            </div>
        </div>
    );
};

export default Header;