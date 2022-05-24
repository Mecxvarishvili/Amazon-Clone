import React from 'react';

const ProductSpecs = (props) => {
    return (
        props.specs == "choice" ?
        <div>
            amazon's <span>choice</span>
        </div>
        :
        <div>
            best Seller
        </div>
    );
};

export default ProductSpecs;