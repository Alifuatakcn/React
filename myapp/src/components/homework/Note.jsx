import React from 'react'
import { Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const Note = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <h2 >Title</h2>
        <div style={{backgrounColor:"red"}}>
       
        <input type="checkbox" />

        <AiFillDelete /> 
 
        </div>
      </Card.Body>
    </Card>
  )
}

export default Note