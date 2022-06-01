import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../img/white-logo.png"
import cartImg from "../../img/whiteCart.png"
import { CART_PAGE, MENU_PAGE, SEARCH_PAGE, SIGN_IN_PAGE } from '../../pages/routes';
import serialize from "../../serialize/serializer"
import { getCartData } from '../../store/selector';



const Header = () => {

    const cartData = useSelector(getCartData)

    return (
        <div className='navBar' >
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
                <div className='navCenter' >
                    <form  action={SEARCH_PAGE}>
                        <select name="category" defaultValue={"all"} >
                            <option value="all" >All</option>
                            <option value="1" >sadfgsdfgsdfgdsfgds</option>
                            <option value="1" >sdfgsdfgsdfg</option>
                            <option value="1" >sdfg</option>
                        </select>
                        <input></input>
                        <button type="submit" className='searchBtn' >
                            <img src="https://icon-library.com/images/svg-search-icon/svg-search-icon-16.jpg" />
                        </button>

                    </form>
                </div>
                <div className='navRight' >
                    <Link to="/" className="languageCont outline-hov" >Language</Link>
                    <Link to={SIGN_IN_PAGE} className="signInCont outline-hov">
                        <div className="sgnT" >Hello, Sign in</div>
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