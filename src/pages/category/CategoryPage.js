import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../componenets/api';

const CategoryPage = () => {
    const [ data, setData ] = useState("s")

    const { id } = useParams()

    useEffect(() => {
        Api.fetchCategoryProduct(id)
        .then(res => setData(res))
    }, [])

    return (
        <div>
            <div>
                <div>{id.replace("&", " & ").replace("-", " ")}</div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default CategoryPage;