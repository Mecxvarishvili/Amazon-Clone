import React from 'react';
import arrowImg from "../../img/banner-left-arrow.png"

const SampleArrow = (props) => {
    const { className, style, onClick, img } = props;
    return (
        <div onClick={onClick} className={img + " arrowFocus"} >
            <img className="bannerArrow" src={arrowImg} />
        </div>
    );
};

export default SampleArrow;