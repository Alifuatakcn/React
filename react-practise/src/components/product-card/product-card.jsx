import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { id, title, image,price,descount,rate } = product;

  return (
    <Card>
      <Card.Img variant="top" src={require(`../../assets/img/${image}`)} style={{ height: "350px" }} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>{descount}</Card.Title>
        <Card.Text>{rate}</Card.Text>
       
      </Card.Body>
    </Card>
  );
};

export default ProductCard;