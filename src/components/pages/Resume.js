import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import resume from "./M-Andersen-Resume.pdf"
const styles = {
  list: {
    background: "transparent",
    borderColor: "white",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  },
};
function Resume() {
  return (
    <Container>
      <div>
        <h1> My Proficencies:</h1>
        <ListGroup>
          <ListGroup.Item style={styles.list}>Javascript</ListGroup.Item>
          <ListGroup.Item style={styles.list}>
            Node.js
          </ListGroup.Item>
          <ListGroup.Item style={styles.list}>Mongoose</ListGroup.Item>
          <ListGroup.Item style={styles.list}>
            React
          </ListGroup.Item>
          <ListGroup.Item style={styles.list}>
            Express
          </ListGroup.Item>

          <br></br>
          <br></br>
          <br></br>

          <Button
            variant="outline-light"
            href={resume}
            size="lg"
          >
            View/Download <br />
            My Resume
          </Button>
        </ListGroup>
      </div>
    </Container>
  );
}
export default Resume;
