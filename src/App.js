import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ProductDetail from './components/productdetail/ProductDetail';
import ProductList from './components/productlist/ProductList';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
