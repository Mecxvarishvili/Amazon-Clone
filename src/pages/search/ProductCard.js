import React from 'react';
import { Link } from 'react-router-dom';
import ProductSpecs from '../../componenets/ProductSpecs';
import { PRODUCT_PAGE } from '../routes';

const ProductCard = (props) => {

    const data = props.data

    return (
        <div className="cardBox" >
            <div className="card" >
                <ProductSpecs spec={"choice"} />
                <div className="imgCont" >
                    <Link to={PRODUCT_PAGE.replace(":id", data.id)}>
                        <img src={data.gallery[0]} />
                    </Link>
                </div>
                <Link className="titleA" to={PRODUCT_PAGE.replace(":id", data.id)} >
                    <div className="title" >{data.name}</div>
                </Link>
                
            </div>
        </div>
    );
};

export default ProductCard;