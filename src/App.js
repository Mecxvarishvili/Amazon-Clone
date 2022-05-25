import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CART_PAGE, CATEGORY_PAGE, MENU_PAGE, PRODUCT_PAGE, } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
import CategoryPage from './pages/category/CategoryPage';
import NotFound from './pages/notFound/NotFound';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cartPage/CartPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={MENU_PAGE} element={<MenuPage/>}/>
          <Route path={CATEGORY_PAGE} element={<CategoryPage/>}/>
          <Route path={PRODUCT_PAGE} element={<ProductPage/>} />
          <Route path={CART_PAGE} element={<CartPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
