import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import logo from "../../img/white-logo.png"
import cartImg from "../../img/whiteCart.png"
import { CART_PAGE, MENU_PAGE, SEARCH_PAGE, SIGN_IN_PAGE } from '../../pages/routes';
import serialize from "../../serialize/serializer"
import { getCartData } from '../../store/selector';



const Header = () => {

    const cartData = useSelector(getCartData)
    const [ searchValue, setSearchValue ] = useState("")
    const [ categoryValue, setCategoryValue ] = useState("")

    const [ formCategoryName, setFormSName ] = useState("")
    const [ formSearchName, setFormIName ] = useState("")

    const [ pathName, setPathName ] = useState(SEARCH_PAGE)
    const location = useLocation()
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery()

    const querySet = (q, setQ) => {
        if(query.get(q)) {
            setQ(query.get(q))
        } else {
            setQ("")
        }

    }

    const handleSubmit = (value, updateState, name) => {
        if(value === "") {
            updateState("")
        } else {
            updateState(name)
        }
    }

    const formSubmit = () => {
        handleSubmit(categoryValue, setFormSName, "category")
        handleSubmit(searchValue, setFormIName, "search")
        if(categoryValue === "" && searchValue === "") {
            setPathName(MENU_PAGE)
        } 
    }

    useEffect(() => {
        querySet("search", setSearchValue)
        querySet("category", setCategoryValue)
    }, [location.pathname])


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
                    <form onSubmit={() => formSubmit() } id="products-search" role="search" method="GET" action={pathName}>
                        <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} id="category" name={formCategoryName} >
                            <option value="" >All Product</option>
                            <option value="baby" >baby</option>
                            <option value="beauty&personal-care" >Beauty & Personal Care</option>
                            <option value="computers" >Computers</option>
                            <option value="electronics" >Electronics</option>
                            <option value="health&household" >Health & Household</option>
                            <option value="video-games" >Video Games</option>
                        </select>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="search" name={formSearchName} />
                        <input  type="submit" hidden />
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