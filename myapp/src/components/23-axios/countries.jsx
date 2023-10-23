import React from "react";
import { Container, Table } from "react-bootstrap";

const Countries = () => {
    
  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th>Country</th>
            <th>Population</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;