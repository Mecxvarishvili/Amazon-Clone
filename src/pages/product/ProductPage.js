import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Api from '../../componenets/api';
import ProductAttributes from './ProductAttributes';
import { setCartProduct } from '../../store/cart/cartActions';
import ProductQuantity from '../../componenets/ProductQuantity';
import { getUserAuthentication } from '../../store/selector';
import Loader from '../../componenets/Loader';
import StarRating from '../../componenets/StarRating';
import ProductSpecs from '../../componenets/ProductSpecs';
import { SIGN_IN_PAGE } from '../routes';

const ProductPage = () => {
    const [ productData, setData ] = useState(false)
    const [ img, setImg ] = useState(0)
    const [ qty, setQty ] = useState(1)
    const [ isLoading, setIsLoading ] = useState(true)

    const dispatch = useDispatch()
    const {id} = useParams()
    const isLoggedIn = useSelector(getUserAuthentication)

    useEffect(() => {
        Api.fetchSingleProduct(id)
        .then(res => {
            setData(res)
            setIsLoading(false)
        })
    }, [])

    return (
        <Loader isLoading={isLoading} >
        {productData && <div className="productCont">
            <div className="prodContainer">
                <div className="leftCol" >
                    <div className="images" >
                        {productData.gallery.map((img, index) => {
                            return (
                            <div key={index} className="sImage" onClick={() => setImg(index)} >
                                <img className='img' src={img} />
                            </div>
                        )})}
                    </div>
                    <div className="mainImgCont">
                        <img className="mainImg" src={productData.gallery[img]} />
                    </div>
                </div>
                <div className="centerCol" >
                    <div className="productTitle">{productData.name}</div>
                    <div className="brand" >Visit the {productData.brand} store</div>
                    <StarRating star={productData.star} />
                    <ProductSpecs spec={productData.spec} />
                    <div className="line"></div>
                    <div className="priceCont" ><span className="price1">Price: </span><span className="price2">${productData.price}</span></div>
                    <div className="attrCont" >
                        {productData.attributes.map((attr, index) => {
                            return ( 
                            <ProductAttributes  key={index} attr={attr} />
                            )
                        })}
                    </div>
                    <div className="line"></div>
                    <div className="description">
                        <div className="about" >About this item</div>
                        <div className="" dangerouslySetInnerHTML={{__html: productData.description}}></div>
                    </div>
                </div>
                <div className="rightCol" >
                    <div className="inRightCol">
                        <div className="price" ><sup>$</sup>{productData.price}</div>
                        {productData.inStock ? <div className="inStock" >in stock</div> : <div className="outOfStock" >Out of Stock</div>} 
                        {productData.inStock && <ProductQuantity data={productData}  qty={qty} setQty={setQty} />}
                        <button onClick={() => {
                            productData.inStock && isLoggedIn && dispatch(setCartProduct(productData, qty));
                            productData.inStock && !isLoggedIn && window.location.replace(SIGN_IN_PAGE)
                        }} className={productData.inStock ? "addCartButton" : "buttonInStock"} >add To cart</button>
                    </div>
                </div>
            </div>
        </div>}
        </Loader>
    );
};

export default ProductPage;