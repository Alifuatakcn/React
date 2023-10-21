import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';

const ProductCard = (props) => {
    const {id,image,discount,price,title,rate}=props
   
    const discPrice=()=> <div>
      <span className="text-danger">{discount}</span><br/>
      <del>{price}</del><strong>{price*(100 - discount)/100}</strong>
     
    </div>
   
  

  return (
   <Container className='container'>
    <Card style={{ width: '10rem'}}>
    <Card.Img  src={require(`../../assets/products/${image}`)} />
    <Card.Body className='text-center '>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='dis' style={{marginTop:""}}>
        {discount}%
      </Card.Text>
      <Card.Text>
       {[...new Array(5)].map( (item,index) => (<span key={index}>
        {index < rate ? <AiFillStar style={{color:"green"}}/> : <AiOutlineStar/>}
       </span>))}
      </Card.Text>
      <Card.Subtitle>
        {discPrice()}
      
      </Card.Subtitle>

    </Card.Body>
  </Card>
  </Container>
  )
}

export default ProductCard