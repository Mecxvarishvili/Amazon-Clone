import React from 'react';

const ProductSpecs = (props) => {
    const spec = props.spec
    return (
        props.spec ?
        <div className="productSpecCont" >
            {props.spec == "choice" ?
            <span className="amazonChoice" >
                Amazon's <span className="choice" >Choice</span>
            </span>
            :
            <span className="bestSeller" >
                Best Seller
            </span>}
        </div> : 
        <></>
    );
};

export default ProductSpecs;