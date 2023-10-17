import React from 'react'
import ProductCard from '../product-card/product-card'
import "../product-list/data.json"
import { Col, Container, Row } from 'react-bootstrap'

const ProductList = () => {
  return (
    <Container>
        <Row>
        {data.map( (product) => ( 
            <Col key={product.id}>
                <ProductCard {...product}/>
            </Col>
            ))}
           
        </Row>
    </Container>
  )
}

export default ProductList