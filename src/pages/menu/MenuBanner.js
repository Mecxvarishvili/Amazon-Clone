import React from 'react';
import Slider from 'react-slick/lib/slider';
import { SEARCH_PAGE } from '../routes';
import SampleArrow from './SampleArrow';
import { Link } from "react-router-dom"

const MenuBanner = () => {
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: <SampleArrow img="left-cont" />,
        nextArrow: <SampleArrow img="right-cont" />,
        className: "bannerCont"
    }

    return (
        <form>
            <Slider {...settings} >
                <div className='imgBox' >
                    <Link to={SEARCH_PAGE +"?category=toys%26games"} >
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
                    </Link>
                </div>
                <div className='imgBox'>
                    <Link to={SEARCH_PAGE+"?category=health%26household"} >
                        <img src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" />
                    </Link>
                </div>
                <div className='imgBox'>
                    <Link to={SEARCH_PAGE +"?category=computers"} >
                        <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
                    </Link>
                </div>
                <div className='imgBox'>
                    <Link to={SEARCH_PAGE +"?category=beauty%26personal-care"} >
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
                    </Link>
                </div>
            </Slider>
        </form>
    );
};

export default MenuBanner;
