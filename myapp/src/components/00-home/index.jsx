import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>React Examples</h1>

      
      <Container>
        <Row className="row-cols-2 row-cols-md-4 row-cols-lg-5">
            <Col>
                <Link to="/hello-world" className="btn btn-light">Hello World</Link>
            </Col>
            <Col>
                <Link to="/countries" className="btn btn-light">Countries</Link>
            </Col>
            <Col>
                <Link to="/external-sass" className="btn btn-light">External Sass</Link>
            </Col>
            <Col>
                <Link to="/clcok" className="btn btn-light">Clock</Link>
            </Col>
            
        </Row>
      </Container>


    </div>
  )
}

export default HomePage