import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Properties = () => {
  return (
    <Container>
        <h2 className="text-center">Properties</h2>
        <Row>
            <Col md={3}>
                <Card>
                    <Card.Img src="/images/property-1.png"/>
                    <Card.Body>
                        <Card.Title>Lux Villa</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Img src="/images/property-2.png"/>
                    <Card.Body>
                        <Card.Title>Lux Villa</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Img src="/images/property-3.png"/>
                    <Card.Body>
                        <Card.Title>Lux Villa</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Img src="/images/property-4.png"/>
                    <Card.Body>
                        <Card.Title>Lux Villa</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Properties