import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Api from '../../componenets/api';
import ProductAttributes from './ProductAttributes';
import { setCartProduct } from '../../store/cart/cartActions';
import ProductQuantity from '../../componenets/ProductQuantity';
import { getUserId } from '../../store/selector';
import Loader from '../../componenets/Loader';
import StarRating from '../../componenets/StarRating';
import ProductSpecs from '../../componenets/ProductSpecs';

const ProductPage = () => {
    const [ productData, setData ] = useState(false)
    const [ img, setImg ] = useState(0)
    const [ qty, setQty ] = useState(1)
    const [ isLoading, setIsLoading ] = useState(true)

    const dispatch = useDispatch()
    const {id} = useParams()
    const userId = useSelector(getUserId)

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
                    <div>
                        <div>About this item</div>
                        <div dangerouslySetInnerHTML={{__html: productData.description}}></div>
                    </div>
                </div>
                <div className="rightCol" >
                    <div className="inRightCol">
                        <div>${productData.price}</div>
                        <div>deliver to ...</div>
                        {productData.inStock ? <div className="inStock" >in stock</div> : <div className="outOfStock" >out of Stock</div>} 
                        <ProductQuantity data={productData}  qty={qty} setQty={setQty} />
                        <button onClick={() => {
                            /* Api.UpdateUser(userId, {_id: productData.id, qty: qty}) */
                            dispatch(setCartProduct(productData, qty))
                        }} className="addCartButton" >add To cart</button>
                    </div>
                </div>
            </div>
        </div>}
        </Loader>
    );
};

export default ProductPage;