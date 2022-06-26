import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../img/white-logo.png"
import cartImg from "../../img/whiteCart.png"
import { CART_PAGE, MENU_PAGE, PROFILE_PAGE, SIGN_IN_PAGE } from '../../pages/routes';
import serialize from "../../serialize/serializer"
import { getCartData, getUserReducer } from '../../store/selector';
import SearchForm from './SearchForm';



const Header = () => {
    const {isLoggedIn, user} = useSelector(getUserReducer)
    const cartData = useSelector(getCartData)
    if(isLoggedIn) {var userName = user.name.split(" ")[0]}
    return (
        <div className='navBar' >
            <a id="nav-top"></a>
            <div className="navTop" >
                <div className='navLeft'>
                    <div className="logo outline-hov" >
                        <Link to={MENU_PAGE}>
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
                <SearchForm/>
                <div className='navRight' >
                    <Link to="/" className="languageCont outline-hov" >Language</Link>
                    <Link to={PROFILE_PAGE} className="signInCont outline-hov">
                        <div className="sgnT" >Hello, {isLoggedIn ? userName : "Sign in"}</div>
                        <div className="sgnB" >Account & Lists</div>
                    </Link>
                    <Link to={CART_PAGE} className="cartCounterCont outline-hov" >
                        <div className='cartCont'>
                            <div className='cartCount'>{serialize.totalProducts(cartData)}</div>
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