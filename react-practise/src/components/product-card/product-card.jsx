import React from 'react'
import "../product-list/data.json"
import { Container } from 'react-bootstrap';

const ProductCard = (props) => {
    const {title,image,price,discount,rate}=props;
   
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard