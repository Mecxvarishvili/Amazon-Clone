import React from 'react';

const ProductAttributes = (props) => {
    const attr = props.attr
    return (
        attr.items ? 
        <div>
            s
        </div>
        :
        <div className="attrBox">
            <div>{attr.displayId}</div>
            <div>{attr.value}</div>
        </div>
    );
};

export default ProductAttributes;