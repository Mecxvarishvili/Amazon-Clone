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

    return (
        <Slider {...settings} >
            <div className='imgBox' >
                <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
            </div>
            <div className='imgBox'>
                <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
            </div>
            <div className='imgBox'>
                <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
            </div>
            <div className='imgBox'>
                <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
            </div>
        </Slider>
    );
};

export default MenuBanner;
