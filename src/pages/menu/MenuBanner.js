import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';
import SampleArrow from './SampleArrow';

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

    const Link = window.location.href

    return (
        <form>
            <Slider {...settings} >
                <div className='imgBox' >
                    <a href={Link+"s?category=toys%26games"} >
                    <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
                    </a>
                </div>
                <div className='imgBox'>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
                </div>
                <div className='imgBox'>
                    <a href={Link+'s?category=computers'} >
                        <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
                    </a>
                </div>
                <div className='imgBox'>
                    <a href={Link+'s?category=beauty%26personal-care'} >
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
                            {/* https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg  */}
                    </a>
                </div>
            </Slider>
        </form>
    );
};

export default MenuBanner;
