import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../componenets/api';
import ProductCard from '../searchPage/ProductCard';

const CategoryPage = () => {
    const [ data, setData ] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        Api.fetchCategoryProduct(id)
        .then(res => setData(res))
    }, [])

    return (
        <div className="categoryPage" >
            <div className="titleCont" >
                <div>{id.replace("&", " & ").replace("-", " ")}</div>
            </div>
            <div className="cardsCont" >
                <div className="resultBox" >{data.length} results for <span>{id.replace("&", " & ").replace("-", " ")}</span></div>
                <div className="cardCont">
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;