import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../componenets/api';
import ProductAttributes from './ProductAttributes';

const ProductPage = () => {
    const [ productData, setData ] = useState(false)
    const [ img, setImg ] = useState(0)

    const {id} = useParams()

    useEffect(() => {

        Api.fetchSingleProduct(id)
        .then(res => setData(res))

    }, [])
    return (
        productData && <div className="productCont">
            <div className="prodContainer">
                <div className="leftCol" >
                    <div className="images" >
                        {productData.gallery.map((img, index) => {
                            return (
                            <div key={index} className="sImage" >
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
                    <div>store</div>
                    <div>rating</div>
                    <div>{productData.price}</div>
                    <div className="attrCont" >
                        {productData.attributes.map((attr, index) => {
                            return ( 
                            <ProductAttributes key={index} attr={attr} />
                            )
                        })}
                    </div>
                    <div>
                        <div>About this item</div>
                        <div dangerouslySetInnerHTML={{__html: productData.description}}></div>
                    </div>
                </div>
                <div className="rightCol" >
                    rightdfsgadfhsdfhgsdghsdghsg
                </div>
            </div>
        </div>
    );
};

export default ProductPage;