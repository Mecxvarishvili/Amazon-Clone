import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CART_PAGE, CATEGORY_PAGE, MENU_PAGE, PRODUCT_PAGE, SEARCH_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
import CategoryPage from './pages/category/CategoryPage';
import NotFound from './pages/notFound/NotFound';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import LayoutRoute from './componenets/LayoutRoute';
import AuthorizationPage from './pages/authorization/AuthorizationPage';
import SearchPage from './pages/search/SearchPage';
import { useEffect } from 'react';
import Api from './componenets/api';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUser } from './store/user/userAction';
import { setUserCart } from './store/cart/cartActions';
import { getUserData, getUserId } from './store/selector';

function App() {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)


  useEffect(() => {
    var products = []
    Api.baseApi("", "GET")
      .then(res => res.json())
      .then(res => products = [...res])

    const cookie = localStorage.getItem("Cookie")

    if(cookie) {
      
      Api.fetchUserToken(cookie)
        .then(res => {if(!!res.ok){
          return res.json()
        } else {
          localStorage.removeItem("Cookie")
          throw new Error(res.status)
        }
        })
        .then(res => { 
          const { cart, ...user } = res
          dispatch(setUserCart(cart))
          dispatch(setUser(user))
        })
        .catch((err) => {})
    } 

  }, [])


  return (
    <div>
      <Router>
        <LayoutRoute element={<Header />} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path={MENU_PAGE} element={<MenuPage/>}/>
          <Route path={CATEGORY_PAGE} element={<CategoryPage/>}/>
          <Route path={PRODUCT_PAGE} element={<ProductPage/>} />
          <Route path={CART_PAGE} element={<CartPage/>} />
          <Route path={SIGN_IN_PAGE} element={<AuthorizationPage/>} />
          <Route path={SIGN_UP_PAGE} element={<AuthorizationPage/>} />
          <Route path={SEARCH_PAGE} element={<SearchPage/>} />
        </Routes>
        <LayoutRoute element={<Footer />} />
      </Router>
    </div>
  );
}

export default App;
