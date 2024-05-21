import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>Sản phẩm #{id}</p>
    </div>
  );
}

export default ProductDetail;
