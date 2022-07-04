import React from 'react';

const ProductSpecs = (props) => {
    const spec = props.spec
    return (
        <div className="productSpecCont" >
            {props.spec == "choic" ?
            <span className="amazonChoice" >
                Amazon's <span className="choice" >Choice</span>
            </span>
            :
            <span className="bestSeller" >
                Best Seller
            </span>}
        </div>
    );
};

export default ProductSpecs;