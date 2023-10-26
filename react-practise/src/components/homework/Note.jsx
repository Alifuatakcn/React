import React from 'react'
import { Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const Note = () => {
  return (
    <Card className="square border border-warning border-2">
      <Card.Body>
        <h2 >Title</h2>
        <div >
       
        <input type="checkbox" />

        <AiFillDelete /> 
 
        </div>
      </Card.Body>
    </Card>
  )
}

export default Note