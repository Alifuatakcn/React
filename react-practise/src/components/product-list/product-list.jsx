import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./data.json"


const ProductList = () => {
 
  return (
    <Container className="mb-5 mt-5">
      <Row className="gy-3">
        {data.map(() => (
          <Col md={3} >
            <ProductCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;