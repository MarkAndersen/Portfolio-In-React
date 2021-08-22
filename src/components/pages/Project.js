import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/project.css";

// const styles = {
//   buttonMargin: {
//     margin: "10px"
//   }
// }

function Project() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">Game Randomizer</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">Employee Tracker</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">E-Commerce ORM</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">Game Randomizer</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">Game Randomizer</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
