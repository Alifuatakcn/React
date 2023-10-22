import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';

const ProductCard = (props) => {
    const {id,image,discount,price,title,rate}=props
   
    const discPrice=()=> <div>
      <span className="text-danger"></span>
      <del style={{color:"red" }}>${price}</del><strong style={{color:"green",fontSize:"2rem" }}>${price*(100 - discount)/100}</strong>
     
    </div>
   
  

  return (
   <Container className='container-card'>
    <Card style={{ width: '10rem'}}>
    <Card.Img  src={require(`../../assets/${image}`)} />
    <Card.Body className='text-center '>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='dis '>
        {discount==0 ? "" : <span>%{discount}</span>}
      </Card.Text>
      <Card.Text>
       {[...new Array(5)].map( (item,index) => (<span key={index}>
        {index < rate ? <AiFillStar style={{color:"green"}}/> : <AiOutlineStar/>}
       </span>))}
      </Card.Text>
      <Card.Subtitle>
        {discount > 0 ? discPrice(): <span>${price}</span>}
      
      </Card.Subtitle>

    </Card.Body>
  </Card>
  </Container>
  )
}

export default ProductCard