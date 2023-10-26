import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const NoteForm = () => {
  return (
    <Row>
    <Col >
    <Card className="square border border-success border-2">
      <Card.Body>
        <h2 >Title</h2>
        <div >
    
        <input type="text" />
        <Button style={{backgrounColor:"info"}}>Create Note</Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
    
  </Row>
    
  )
}

export default NoteForm