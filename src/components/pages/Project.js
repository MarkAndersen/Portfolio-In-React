import React from "react";
import { Card, CardGroup, Button, Container } from "react-bootstrap";
import WTImg from "../../assets/wt-chart.png";
import GRImg from "../../assets/GR.png";
import TrackImg from "../../assets/Track.png";
import PWAImg from "../../assets/PWA.png";


const styles = {
 header: {
  backgroundColor:'dimgrey',
  fontSize: 'larger'
 },
 parent: {
  borderTop: 'darkcyan',
  borderTopStyle: 'groove'
 }
}

function Project() {
  return (
    <Container style={styles.parent} fluid>
      <CardGroup>
        <Card className="text-center">
          <Card.Img variant="top" src={WTImg} />
          <Card.Header style={styles.header}>Workout Tracker</Card.Header>
          <Card.Body>
            <Card.Title>Track Your Progress!</Card.Title>
            <Card.Text>
              An application, hosted on Heroku, where a user can create a
              workout plan, adding exercises and seeing their work visualized
              via graphs of their previous 7 workouts. This application
              utilizes, Javascript, Express, and Mongoose
            </Card.Text>
            <Button
              variant="secondary"
              size="lg"
              href="https://pacific-dawn-55437.herokuapp.com/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/MarkAndersen/Workout-Tracker"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img variant="top" src={PWAImg} />
          <Card.Header style={styles.header}>PWA-Budget Tracker</Card.Header>
          <Card.Body>
            <Card.Title>Track Your Budget Online and Offline</Card.Title>
            <Card.Text>
              A budget tracker application that works whether the user is online
              or offline, utilizing a webmanifest, service worker, and indexed
              DB.
            </Card.Text>{" "}
            <Button
              variant="secondary"
              size="lg"
              href="https://afternoon-gorge-52033.herokuapp.com/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/MarkAndersen/PWA-budget-tracker"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
          <Card className="text-center">
            <Card.Img variant="top" src={GRImg} />
            <Card.Header style={styles.header}>Game Randomizer</Card.Header>
            <Card.Body>
              <Card.Title>Steam-Roulette</Card.Title>
              <Card.Text>
                An application where a user can randomize a game from the Steam
                library, in hopes they find one they would like to play. Made in
                collaboration with Angelica Sargent, James O'Keefe, and Scott
                Core
              </Card.Text>
              <Button
                variant="secondary"
                size="lg"
                href="https://agraysargent.github.io/Game-Randomizer/"
              >
                Page Link
              </Button>{" "}
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/agraysargent/Game-Randomizer"
              >
                Repo Link
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={TrackImg} />
            <Card.Header style={styles.header}>Employee Tracker</Card.Header>
            <Card.Body>
              <Card.Title>Track and Organize Employees!</Card.Title>
              <Card.Text>
                A Node.js command line application working in conjuction with
                MySQL and applying CRUD concepts to modify a database. The
                database was centered around a small workforce, with information
                including name, role, department, etc.
              </Card.Text>
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/MarkAndersen/Employee-tracker/"
              >
                Repo Link
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header style={styles.header}>Final Project</Card.Header>
            <Card.Body>
              <Card.Title>Tentative Title: Yo, Santa!</Card.Title>
              <Card.Text>
                Final project will go here! In Collaboration with Pratik Patel,
                Angelica Sargent and James O'Keefe
              </Card.Text>
              <Button variant="secondary" size="lg">
                Page Link
              </Button>{" "}
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/agraysargent/Yo-Santa"
              >
                Repo Link
              </Button>
            </Card.Body>
          </Card>
      </CardGroup>
    </Container>
  );
}

export default Project;
