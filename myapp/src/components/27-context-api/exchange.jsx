import React, { useContext } from "react";
import StoreContext from "../../store";
import { Button, ButtonGroup, InputGroup } from "react-bootstrap";
import { Form } from "react-router-dom";

const Exchange = () => {
  const store = useContext(StoreContext);

  return (
    <div>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
    
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Exchange;