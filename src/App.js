import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CART_PAGE, HOME_PAGE, PRODUCT_PAGE, PROFILE_PAGE, SEARCH_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
import NotFound from './pages/notFound/NotFound';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import LayoutRoute from './componenets/LayoutRoute';
import AuthorizationPage from './pages/authorization/AuthorizationPage';
import SearchPage from './pages/search/SearchPage';
import { useEffect, useRef, useState } from 'react';
import Api from './componenets/api';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUser, setUserAuthentication } from './store/user/userAction';
import { setUserCart } from './store/cart/cartActions';
import { getUserId, getCartData, getUserAuthentication } from './store/selector';
import serialize from './serialize/serializer';
import PrivateRoute from './pages/authorization/PrivateRoute';
import ProfilePage from './pages/profile/ProfilePage';
import AuthorizedRoute from './pages/authorization/AuthorizedRoute';
import Loader from './componenets/Loader';
import ScrollToTop from './componenets/ScrollToTop';

function App() {
  const dispatch = useDispatch()
  const userId = useSelector(getUserId)
  const cartData = useSelector(getCartData)
  const isLoggedIn = useSelector(getUserAuthentication)
  const [ loader, setIsLoading] = useState(true)
  const pageRef = useRef()

  useEffect(() => {
    let products = []
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
          setIsLoading(false)
          throw new Error(res.status)
        }
        })
        .then(res => { 
          const { cart, ...user } = res
          dispatch(setUser(user))
          Api.fetchCartProducts(cart)
            .then((res) => {
              dispatch(setUserCart(res))
              dispatch(setUserAuthentication(true))
              setIsLoading(false)})
        })
        .catch((err) => {console.log(err)})
    }else {
      setIsLoading(false)
    }

  }, [])

  useEffect(() => {
    if(isLoggedIn) {
      Api.updateCart(userId, serialize.updateCart(cartData))
    }
  }, [cartData])

  return (
    <div ref={pageRef}>
      <div className="amazonClone">amazon clone</div>
      <Loader isLoading={loader}>
      <Router>
        <ScrollToTop />
        <LayoutRoute element={<Header pageRef={pageRef} />} />
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
      </Router>
      </Loader>
    </div>
  );
}

export default App;
