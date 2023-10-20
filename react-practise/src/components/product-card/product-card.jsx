import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';
import '../product-card/product-card.scss'

const ProductCard = ({id,title,image,descount,rate}) => {


  return (
    <div className="card">
    <img src={imageSrc} alt={title} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>

    )
          }



export default ProductCard