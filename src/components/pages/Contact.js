import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, Row, Container, Button, Col } from "react-bootstrap";

function Contact() {
  //assigning state variables, and setting inital states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 //sets stat as input changes
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    //prevents page reload upon submission
    e.preventDefault();
    //checks email vs regex pattern to validate, pulling in helper function
    if (!validateEmail(email) || !name || !message) {
      alert(`Email Invalid and no name or message submitted!`);
      setEmail("");
      setName("");
      setMessage("");
      return;
    }

    alert(`Thanks for your question ${name}!`);

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            value={message}
            style={{ height: "25vh" }}
            name="message"
            placeholder="Enter Your Message"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="outline-light"
          type='submit'
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
