import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CATEGORY_PAGE, MENU_PAGE, PRODUCT_PAGE, } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
import CategoryPage from './pages/category/CategoryPage';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={MENU_PAGE} element={<MenuPage/>}/>
          <Route path={CATEGORY_PAGE} element={<CategoryPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
