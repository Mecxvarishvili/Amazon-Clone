import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams, useLocation, } from 'react-router-dom';
import Api from '../../componenets/api';
import Loader from '../../componenets/Loader';

const SearchPage = () => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const location = useLocation()
    const { id } = useParams()
    const query = useQuery()
    const category = query.get("category")

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
                <div className="titleCont" >
                    <div>{/* {id.replace("&", " & ").replace("-", " ")} */}</div>
                </div>
                <div className="cardsCont" >
                    <div className="resultBox" >{data.length} results for <span>{/* {id.replace("&", " & ").replace("-", " ")} */}</span></div>
                    <div className="cardCont">
                        {data && data.map(data => (
                            <ProductCard key={data.id} data={data}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </Loader>
    );
};

export default SearchPage;