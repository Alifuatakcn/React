import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./Students.json";
import StudentCard from "./studentCard";

const Cards = () => {
  return (
    <Container className="mb-5 mt-5">
      <Row className="gy-3">
        {data.map((student, index) => (
          <Col md={3} key={index}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
