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
            <div className="id" >{attr.displayId}</div>
            <div className="value" >{attr.value}</div>
        </div>
    );
};

export default ProductAttributes;