import './App.css';
import Header from './layouts/header/Header';
import Footer from "./layouts/footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PRODUCT_PAGE, } from './pages/routes';
import MenuPage from './pages/menu/MenuPage';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={PRODUCT_PAGE} element={<MenuPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
