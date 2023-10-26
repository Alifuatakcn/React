import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import NoteForm from './NoteForm'
import Notes from './Notes'

const ToDoApp = () => {
  return (
   
    <Container className="square border border-danger border-3 rounded"> 
    
       <Row >
        <Col className="d-flex  row-cols-md-3 row-cols-lg-2 " >
        <NoteForm/>
       
         <Notes/>
         </Col>
      </Row>
     
   </Container> 
  )
}

export default ToDoApp

