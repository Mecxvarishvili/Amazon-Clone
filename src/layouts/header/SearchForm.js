import React from 'react';
import { useState, useEffect } from 'react';
import { SEARCH_PAGE, MENU_PAGE } from '../../pages/routes';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthentication, getUserData } from '../../store/selector';

const SearchForm = () => {

    /* const {isLoggedIn, data} = useSelector(getUserData) */

    const [ searchValue, setSearchValue ] = useState("")
    const [ categoryValue, setCategoryValue ] = useState("")

    const [ formCategoryName, setFormSName ] = useState("")
    const [ formSearchName, setFormIName ] = useState("")

    const [ pathName, setPathName ] = useState(SEARCH_PAGE)
    const location = useLocation()
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery()

    const querySet = (q, setQ) => {
        if(query.get(q)) {
            setQ(query.get(q))
        } else {
            setQ("")
        }
    }

    const handleSubmit = (value, updateState, name) => {
        if(value === "") {
            updateState("")
        } else {
            updateState(name)
        }
    }

    const formSubmit = () => {
        handleSubmit(categoryValue, setFormSName, "category")
        handleSubmit(searchValue, setFormIName, "search")
        if(categoryValue === "" && searchValue === "") {
            setPathName(MENU_PAGE)
        } 
    }

    useEffect(() => {
        querySet("search", setSearchValue)
        querySet("category", setCategoryValue)
    }, [location.pathname])


    return (
        <div className='navCenter' >
            <form onSubmit={() => formSubmit() } id="products-search" role="search" method="GET" action={pathName}>
                <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} id="category" name={formCategoryName} >
                    <option value="" >All Product</option>
                    <option value="baby" >Baby</option>
                    <option value="beauty&personal-care" >Beauty & Personal Care</option>
                    <option value="computers&accessories" >Computers</option>
                    <option value="dresses" >Dresses</option>
                    <option value="electronics" >Electronics</option>
                    <option value="health&household" >Health & Household</option>
                    <option value="toys&games" >Toys & Games</option>
                    <option value="video-games" >Video Games</option>
                </select>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="search" name={formSearchName} />
                <input  type="submit" hidden />
                <button type="submit" className='searchBtn' >
                    <img src="https://icon-library.com/images/svg-search-icon/svg-search-icon-16.jpg" />
                </button>

            </form>
        </div>
    );
};

export default SearchForm;