import React from 'react'
import { Col, Container,  Row, Table } from 'react-bootstrap'
import NoteForm from './NoteForm'
import Notes from './Notes'

const ToDoApp = () => {
  return (
   
    <Container> 
      <Table striped bordered >
        <thead>
       <Row >
        <Col>
          <NoteForm/>
        </Col>
        <Col>
         <Notes/>
        </Col>
      </Row>
      </thead>
      </Table>
   </Container> 
  )
}

export default ToDoApp

//className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"