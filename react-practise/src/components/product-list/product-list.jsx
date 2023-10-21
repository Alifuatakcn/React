import React from 'react'
import products from "./data.json"
import {Col, Container, Row} from "react-bootstrap"
import ProductCard from '../product-card/product-card'

const ProductList = () => {
  return (
    <Container   >
        <Row className='mt-5 g-5 justify-content-center align-items-center'>
            {
                products.map((product,index)=>(

                    <Col key={product.id} 
                    className='d-flex justify-content-center align-items-center' >
                        <ProductCard {...product}  />
                    </Col>
                ))

            }

        </Row>

    </Container>
  )
}

export default ProductList