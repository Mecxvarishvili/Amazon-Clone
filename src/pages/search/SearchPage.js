import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useLocation, } from 'react-router-dom';
import Api from '../../componenets/api';
import Loader from '../../componenets/Loader';
import { SEARCH_PAGE } from '../routes';

const SearchPage = () => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery()
    const category = query.get("category")
    const search = query.get("search")
    const location = useLocation()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ data, setData ] = useState('')

    useEffect(() => {
        Api.fetchSearchProducts(SEARCH_PAGE +location.search)
            .then(res => {
                setData(res)
                setIsLoading(false)
        })
    }, [location.search])

    return (
        <Loader isLoading={isLoading} >
            <div className="categoryPage" >
                {data.length ?
                <>
                    {category && <div className="titleCont" >
                        <div>{category.replace("&", " & ").replace("-", " ")}</div>
                    </div>}
                    <div className="cardsCont" >
                        <div className="resultBox" >{data.length} results for
                        {search ?<span className="search" > {search}</span>:
                        <span className="category"> {category.replace("&", " & ").replace("-", " ")}</span>}
                        </div>
                        <div className="cardCont">
                            {data.map(data => (
                                <ProductCard key={data.id} data={data}/>
                            ))}
                        </div>
                    </div>
                </>
                : <div className="noResultCont">
                    <div className="cont1" >
                        <div className="noResult1">No result for {search}</div>
                        <div className="noResult2">Try checking your spelling or use more general terms</div>
                    </div>
                    <div className="help" >Need help?</div>
                </div>
                }
                
            </div>
        </Loader>
    );
};

export default SearchPage;