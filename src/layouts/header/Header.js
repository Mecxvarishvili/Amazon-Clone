import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div className='navBar' >
            <div className="navTop" >
                <div className='navLeft'>
                    <div className="logo" ></div>
                    <div>location</div>
                </div>
                <div className='navCenter' >
                    <form>
                        <select name="category" defaultValue={"all"} >
                            <option value="all" >All</option>
                            <option value="1" ></option>
                            <option value="1" ></option>
                            <option value="1" ></option>
                        </select>
                        <input></input>
                        <button></button>
                    </form>
                </div>
                <div className='navRight' >
                    <Link to="/" >language</Link>
                    <Link to="/" >hello</Link>
                    <Link to="/" >order</Link>
                    <Link to="/" >cart</Link>
                </div>
            </div>
            <div className="navBottom" >
                <div className="navLeft" >all</div>
                <div className="navRight" >
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