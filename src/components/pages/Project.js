import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WTImg from "../../assets/wt-chart.png"
import "../../styles/project.css";

// const styles = {
//   buttonMargin: {
//     margin: "10px"
//   }
// }

function Project() {
  return (
    <Container className="parent" fluid>
      <Row>
      <Col>
          <Card className="text-center">
            <Card.Img variant="top" src={WTImg} />
            <Card.Header className="cardHeader">Workout Tracker</Card.Header>
            <Card.Body>
              <Card.Title>Track Your Progress!</Card.Title>
              <Card.Text>
                An application, hosted on Heroku, where a user can create a workout plan, adding exercises and seeing their work visualized via graphs of their previous 7 workouts. This application utilizes, Javascript, Express, and Mongoose
              </Card.Text>
              <Button variant="secondary" size="lg" href="https://pacific-dawn-55437.herokuapp.com/?id=611f2ab75a6aa900162db639">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg" href="https://github.com/MarkAndersen/Workout-Tracker">
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
              <Card.Title>Seed Your Database and Modify!</Card.Title>
              <Card.Text>
              A back-end, command line Node.js application, with sequelize, using RESTful routes and employing CRUD operations to Create, Read, Update and Modify an inventory of products.
              </Card.Text>
              <Button variant="secondary" size="lg" href="https://github.com/MarkAndersen/E-Commerce-ORM">
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
              <Card.Title>Steam-Roulette</Card.Title>
              <Card.Text>
               An application where a user can randomize a game from the Steam library, in hopes they find one they would like to play. Made in collaboration with Angelica Sargent, James O'Keefe, and Scott Core
              </Card.Text>
              <Button variant="secondary" size="lg" href="https://agraysargent.github.io/Game-Randomizer/">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg" href="https://github.com/agraysargent/Game-Randomizer">
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
              <Card.Title>Track and Organize Employees!</Card.Title>
              <Card.Text>
              A Node.js command line application working in conjuction with MySQL and applying CRUD concepts to modify a database. The database was centered around a small workforce, with information including name, role, department, etc.
              </Card.Text>
              <Button variant="secondary" size="lg" href="https://github.com/MarkAndersen/Employee-tracker/">
                Repo Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header className="cardHeader">Final Project</Card.Header>
            <Card.Body>
              <Card.Title>Name TBD</Card.Title>
              <Card.Text>
               Final project will go here! In Collaboration with Pratik Patel, Angelica Sargent and James O'Keefe
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button variant="secondary" size="lg" href="https://github.com/agraysargent/Yo-Santa">
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
