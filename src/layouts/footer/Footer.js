import React from 'react';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="backToTop">
                <a href="#nav-top" >Back to top</a>
            </div>
            <div className='footCont' >
                <div className="infoCont" >
                    <div className="gridBox" >
                        <div className="infoBox" >
                            <div className="infoTitle" >Get to know</div>
                            <div className="infoCategory" >
                                <div>Careers</div>
                                <div>Blogs</div>
                                <div>About Amazon</div>
                                <div>Investor Relations</div>
                                <div>Amazon Devices</div>
                                <div>Amazon Science</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridBox" >
                        <div className="infoBox" >
                            <div className="infoTitle" >Make Money with Us</div>
                            <div className="infoCategory" >
                                <div>Sell products on Amazon</div>
                                <div>Sell on Amazon Business</div>
                                <div>Sell apps on Amazon</div>
                                <div>Become an Affiliate</div>
                                <div>Advertise Your Products</div>
                                <div>Self-Publish with Us</div>
                                <div>Host an Amazon Hub</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridBox" >
                        <div className="infoBox" >
                            <div className="infoTitle" >Amazon Payment Products</div>
                            <div className="infoCategory" >
                                <div>Amazon Business Card</div>
                                <div>Shop with Points</div>
                                <div>Reload Your Balance</div>
                                <div>Amazon Currency Converter</div>
                            </div>
                        </div>
                    </div>
                    <div className="gridBox" >
                        <div className="infoBox" >
                            <div className="infoTitle" >Let Us Help You</div>
                            <div className="infoCategory" >
                                <div>Amazon and COVID-19</div>
                                <div>Your Account</div>
                                <div>Your Orders</div>
                                <div>Shipping Rates & Policies</div>
                                <div>Returns & Replacements</div>
                                <div>Amazon Assistant</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line" ></div>
            </div>
        </div>
    );
};

export default Footer;