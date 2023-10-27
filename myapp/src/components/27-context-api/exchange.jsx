import React, { useContext } from "react";
import StoreContext from "../../store";
import { Form, InputGroup } from "react-bootstrap";

const Exchange = () => {
  const store = useContext(StoreContext);
  const { currencies } = store;

  const handleChange = (e) => { 
    console.log(e.target.value)
   }

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type amount"
          aria-label="Type amount"
          aria-describedby="basic-addon1"
        />

        <Form.Select
          aria-label="Default select example"
          onChange={handleChange} value=""
        >
          <option disabled>
            Currency
          </option>
          {Object.keys(currencies).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>

        <InputGroup.Text id="basic-addon1">Result:</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Exchange;