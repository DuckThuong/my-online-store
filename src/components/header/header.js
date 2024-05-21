import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/products">Sản phẩm</Link></li>
          <li><Link to="/cart">Giỏ hàng</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
