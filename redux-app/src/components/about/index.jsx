import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src="/images/about-us.png" className="img-fluid" />
        </Col>
        <Col md={8}>
          <p>
            At our company, we're more than just a real estate agency - we're
            your trusted partners in finding the perfect place to call home.
            With a passion for properties and a commitment to exceptional
            service, we have been serving the community and beyond for 13 years.
          </p>

          <p>
            Our mission is simple: to turn your real estate dreams into reality.
            Whether you're a first-time homebuyer, a seasoned investor, or
            looking to sell your property, we're dedicated to guiding you
            through the entire process with integrity, expertise, and a
            personalized touch.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
