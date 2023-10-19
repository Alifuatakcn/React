import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

const ProductCard = (props) => {
    const {id,title,image,price,descount,rate}=props

    

  return (
    <Card className=''>
    <Card.Img variant="top" src={require(`../../assets/products/${image}`)} />
    <Card.Body className='text-center '>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{descount}</Card.Text>
      <Card.Text >{[...new Array(5).map( (item,index) =>( <span
        key={index}>{index < rate ? <AiFillStar/> : <AiOutlineStar/>}
      </span>))]}
       </Card.Text>
      <Card.Subtitle className='fs-3 mb-1'>${price}</Card.Subtitle>

     
    </Card.Body>
  </Card>
  )
}

export default ProductCard