import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CART_PAGE, HOME_PAGE, PRODUCT_PAGE, PROFILE_PAGE, SEARCH_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
import NotFound from './pages/notFound/NotFound';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import LayoutRoute from './componenets/LayoutRoute';
import AuthorizationPage from './pages/authorization/AuthorizationPage';
import SearchPage from './pages/search/SearchPage';
import { useEffect, useState } from 'react';
import Api from './componenets/api';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUser } from './store/user/userAction';
import { setUserCart } from './store/cart/cartActions';
import { getUserId, getCartData } from './store/selector';
import serialize from './serialize/serializer';
import PrivateRoute from './pages/authorization/PrivateRoute';
import ProfilePage from './pages/profile/ProfilePage';
import AuthorizedRoute from './pages/authorization/AuthorizedRoute';

function App() {
  const dispatch = useDispatch()
  const userId = useSelector(getUserId)
  const cartData = useSelector(getCartData)
  const [ loader, setIsLoading] = useState(false)


  useEffect(() => {
    var products = []
    Api.baseApi("", "GET")
      .then(res => res.json())
      .then(res => products = [...res])

    const Token = localStorage.getItem("Token")

    if(Token) {
      
      Api.fetchUserToken(Token)
        .then(res => {if(!!res.ok){
          return res.json()
        } else {
          localStorage.removeItem("Token")
          setIsLoading(true)
          throw new Error(res.status)
        }
        })
        .then(res => { 
          const { cart, ...user } = res
          dispatch(setUserCart(cart))
          dispatch(setUser(user))
          setIsLoading(true)
        })
        .catch((err) => {console.log(err)})
    }else {
      setIsLoading(true)
    }

  }, [])

  useEffect(() => {
    if(userId) {
      Api.updateUser(userId, serialize.updateUser(cartData))
    }
  }, [cartData])

  return (
    <div>
      {loader && <Router>
        <LayoutRoute element={<Header />} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path={HOME_PAGE} element={<MenuPage/>}/>
          <Route path={PRODUCT_PAGE} element={<ProductPage/>} />
          <Route path={SEARCH_PAGE} element={<SearchPage/>} />
          <Route path={SIGN_IN_PAGE} element={<AuthorizedRoute  child={<AuthorizationPage/>} />} />
          <Route path={SIGN_UP_PAGE} element={<AuthorizedRoute  child={<AuthorizationPage/>} />} />
          <Route path={CART_PAGE} element={<PrivateRoute  child={<CartPage/>} />} />
          <Route path={PROFILE_PAGE} element={<PrivateRoute  child={<ProfilePage/>} />} />
        </Routes>
        <LayoutRoute element={<Footer />} />
      </Router>}
    </div>
  );
}

export default App;
