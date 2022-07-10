import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams, useLocation, Navigate, } from 'react-router-dom';
import Api from '../../componenets/api';
import Loader from '../../componenets/Loader';
import { HOME_PAGE } from '../routes';

const SearchPage = () => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery()
    const category = query.get("category")
    const search = query.get("search")
    const location = useLocation()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ data, setData ] = useState('')

    useEffect(() => {
        Api.fetchSearchProducts(location.search)
            .then(res => {
                setData(res)
                setIsLoading(false)
        })
    }, [])

    return (
        <Loader isLoading={isLoading} >
            <div className="categoryPage" >
                {category && <div className="titleCont" >
                    <div>{category.replace("&", " & ").replace("-", " ")}</div>
                </div>}
                <div className="cardsCont" >
                    <div className="resultBox" >{data.length} results for 
                    {search ?<span className="search" >{search}</span>:
                    <span className="category">{category.replace("&", " & ").replace("-", " ")}</span>}
                    </div>
                    <div className="cardCont">
                        {data.length ? data.map(data => (
                            <ProductCard key={data.id} data={data}/>
                        )):
                        <div>product not found</div>
                        }
                    </div>
                </div>
            </div>
        </Loader>
    );
};

export default SearchPage;