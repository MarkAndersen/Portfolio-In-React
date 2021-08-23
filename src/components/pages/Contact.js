import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { TextArea, Form, Row, Container, Button, Col } from "react-bootstrap";

function Contact() {
  //assigning state variables, and setting inital states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    //form fields
    // <Container>
    //   <h2>If you have a question please fill out the form below!</h2>
    //     <Row>
    //       <input
    //         value={name}
    //         style={{ width: "30vw", background: "white", color: "black",}}
    //         name="name"
    //         onChange={handleInputChange}
    //         type="text"
    //         placeholder="name"
    //       />
    //     </Row>
    //     <br></br>
    //     <Row>
    //       <input
    //         value={email}
    //         style={{ width: "30vw", background: "white", color: "black" }}
    //         name="email"
    //         onChange={handleInputChange}
    //         type="email"
    //         placeholder="email"
    //       />
    //     </Row>
    //     <br></br>
    //     <Row>
    //     <textarea
    //       value={message}
    //       style={{
    //         height: "30vh",
    //         width: "30vw",
    //         background: "white",
    //         color: "black",
    //       }}
    //       name="message"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="message"
    //     />
    //     </Row>
    //     <Row>
    //        <Row>
    //       <Button variant="outline-light" style={{ width: '5vw' }} onClick={handleFormSubmit}>
    //         Submit
    //       </Button>
    //     </Row>
    //     </Row>
    // </Container>
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
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
            style={{ height: "25vh" }}
            name="message"
            placeholder="Enter Your Message"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="outline-light"
          style={{ width: "5vw", justifyContent: "end" }}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
