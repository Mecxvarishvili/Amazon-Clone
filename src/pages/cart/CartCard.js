import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_PAGE } from '../routes';
import ProductQuantity from '../../componenets/ProductQuantity';
import { useDispatch } from 'react-redux';
import { setQtyFromCart } from '../../store/cart/cartActions';
import StarRating from '../../componenets/StarRating';

const CartCard = (props) => {
    const { data } = props
    const dispatch = useDispatch()

    const quantitySet = (data) => {
        return (
            <>
            <ProductQuantity qty={data.qty} data={data} />
            <div className="deleteButton" onClick={() => {
                dispatch(setQtyFromCart(data.id, 0))
            }} >Delete</div>
            </>
        )
    }

    return (
        <div className="cardCont" >
            <div className='mainCont' >
                <div className='imgCont'>
                    <Link to={PRODUCT_PAGE.replace(":id", data.id)} >
                        <img src={data.gallery[0]} />
                    </Link>
                    <div className="mobileQty">
                        {quantitySet(data)}
                    </div>
                </div>
                <div className='describeCont' >
                    <div>
                        <Link to={PRODUCT_PAGE.replace(":id", data.id)} >
                            <div className="title" >{data.name}</div>
                        </Link>
                        <div className='inStock' >In Stock</div>
                        <div>Brand: {data.brand}</div>
                    </div>
                    <div className="detailCont" >
                        {quantitySet(data)}
                    </div>
                    <StarRating star={data.star} />
                    <div className="mobilePrice">{data.price}</div>
                </div>
            </div>
            <div className='priceCont' >${data.price}</div>
        </div>
    );
};

export default CartCard;