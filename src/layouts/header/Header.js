import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../img/white-logo.png"
import cartImg from "../../img/whiteCart.png"
import userImg from"../../img/userImg.png"
import { CART_PAGE, HOME_PAGE, PROFILE_PAGE, SEARCH_PAGE } from '../../pages/routes';
import serialize from "../../serialize/serializer"
import { getCartData, getUserReducer } from '../../store/selector';
import SearchBar from './SearchBar';



const Header = () => {
    const {isLoggedIn, user} = useSelector(getUserReducer)
    const cartData = useSelector(getCartData)
    const totalProduct = serialize.totalProducts(cartData)
    const category = [
        {id: "baby", title: "Baby"},
        {id: "beauty%26personal-care", title: "Beauty & Personal Care"},
        {id: "computers", title: "Computers & Accesories"},
        {id: "dresses", title: "Dresses"},
        {id: "electronics", title: "Electronics"},
        {id: "health%26household", title: "Health & Household"},
        {id: "toys%26games", title: "Toys & Games"},
        {id: "video-games", title: "Video Games"},
    ]
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
                        <div className="userCont1" >
                            <div className="sgnT" >Hello, {user.name ? userName : "Sign in"}</div>
                            <div className="sgnB" >Account & Lists</div>
                        </div>
                        <div className="userCont2" >
                            {isLoggedIn ? <span>{userName} &#x203A;</span> : <span>Sign in &#x203A;</span>}
                            <img className="userImg" src={userImg} />
                        </div>      
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
                {category.map((data) => (
                    <Link to={SEARCH_PAGE+`?category=${data.id}`} key={data.id}>{data.title}</Link>
                ))}
            </div>
        </div>
    );
};

export default Header;