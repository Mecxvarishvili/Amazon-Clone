import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_PAGE } from '../routes';
import ProductQuantity from '../../componenets/ProductQuantity';
import { useDispatch } from 'react-redux';
import { deleteCartProduct } from '../../store/cart/cartActions';
import StarRating from '../../componenets/StarRating';

const CartCard = (props) => {
    const { data } = props
    const dispatch = useDispatch()

    return (
        <div className="cardCont" >
            <div className='mainCont' >
                <div className='imgCont'>
                    <Link to={PRODUCT_PAGE.replace(":id", data.id)} >
                        <img src={data.gallery[0]} />
                    </Link>
                </div>
                <div className='describeCont' >
                    <div>
                        <Link to={PRODUCT_PAGE.replace(":id", data.id)} >
                            <div className="title" >{data.name}</div>
                        </Link>
                        <div className='inStock' >In Stock</div>
                        <div>{data.brand}</div>
                    </div>
                    <div className="detailCont" >
                        <ProductQuantity qty={data.qty} data={data} />
                        <div onClick={() => {
                            dispatch(deleteCartProduct(data.id))
                        }} > delete</div>
                    </div>
                    <StarRating star={data.star} />
                </div>
            </div>
            <div className='priceCont' >${data.price}</div>
        </div>
    );
};

export default CartCard;