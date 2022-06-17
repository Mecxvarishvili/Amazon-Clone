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

function App() {
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
