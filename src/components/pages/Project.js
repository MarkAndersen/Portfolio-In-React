import React from "react";
import { Card, CardGroup, Button, Container, Image } from "react-bootstrap";
import WTImg from "../../assets/wt-chart.jpg";
import GRImg from "../../assets/GR.png";
import TrackImg from "../../assets/Track.png";
import PWAImg from "../../assets/PWA.png";
import WDSImg from "../../assets/wds.png";
import YSImg from "../../assets/Yo-Santa.png";

const styles = {
  header: {
    backgroundColor: "dimgrey",
    fontSize: "larger",
  },
  picture: {
    minHeight: "40vh",
    width: "100%",
  },
};

function Project() {
  return (
    <Container>
      <CardGroup>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={WTImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>Workout Tracker</Card.Header>
          <Card.Body>
            <Card.Title>Track Your Progress!</Card.Title>
            <Card.Text>
              An application, hosted on Heroku, where a user can create a
              workout plan, adding exercises and seeing their work visualized
              via graphs of their previous 7 workouts. The user can specify
              whether the exercise is cardio or resistance and their stats are
              combined in aggregate and totaled to be shown back to the user
            </Card.Text>
            <Button
              variant="outline-light"
              size="lg"
              href="https://pacific-dawn-55437.herokuapp.com/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/MarkAndersen/Workout-Tracker"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img
            as={Image}
            variant="top"
            src={PWAImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>PWA-Budget Tracker</Card.Header>
          <Card.Body>
            <Card.Title>Track Your Budget Online and Offline</Card.Title>
            <Card.Text>
              A budget tracker application that works whether the user is online
              or offline, utilizing a webmanifest, service worker, and indexed
              DB. When a user interacts with this app, their data is stored
              indexed DB and the service worker then pushes that data back to
              the server once the user is back online
            </Card.Text>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://afternoon-gorge-52033.herokuapp.com/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/MarkAndersen/PWA-budget-tracker"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={YSImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>Final Project</Card.Header>
          <Card.Body>
            <Card.Title>Yo, Santa!</Card.Title>
            <Card.Text>
              A single page React App where the user can book event entertainment for the holidays! Users can create an account, login and select from multiple packages per season.
              In Collaboration with Pratik Patel,
              Angelica Sargent and James O'Keefe
            </Card.Text>{" "}
            <br></br>
            <Button variant="outline-light" size="lg" href="https://powerful-meadow-82494.herokuapp.com">
              Page Link
            </Button>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/agraysargent/Yo-Santa"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={GRImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>Game Randomizer</Card.Header>
          <Card.Body>
            <Card.Title>Steam-Roulette</Card.Title>
            <Card.Text>
              An application where a user can randomize a game from the Steam
              library, in hopes they find one they would like to play. Made in
              collaboration with Angelica Sargent, James O'Keefe, and Scott Core
            </Card.Text>
            <br></br>
            <Button
              variant="outline-light"
              size="lg"
              href="https://agraysargent.github.io/Game-Randomizer/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/agraysargent/Game-Randomizer"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={TrackImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>Employee Tracker</Card.Header>
          <Card.Body>
            <Card.Title>Track and Organize Employees!</Card.Title>
            <Card.Text>
              A Node.js command line application working in conjuction with
              MySQL and applying CRUD concepts to modify a database. The
              database was centered around a small workforce
            </Card.Text>
            <br></br>
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/MarkAndersen/Employee-tracker/"
            >
              Repo Link
            </Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={WDSImg}
            style={styles.picture}
          />
          <Card.Header style={styles.header}>Workday Scheduler</Card.Header>
          <Card.Body>
            <Card.Title>Track and Organize Employees!</Card.Title>
            <Card.Text>
              A simple Front end application using some third party APIs like
              moment.js and jquery to create a workday scheduler that
              dynamically updates display depending on the time of day and saves
              user input in local storage for persistence
            </Card.Text>
            <Button
              variant="outline-light"
              size="lg"
              href="https://markandersen.github.io/Workday-Scheduler/"
            >
              Page Link
            </Button>{" "}
            <Button
              variant="outline-light"
              size="lg"
              href="https://github.com/MarkAndersen/Workday-Scheduler"
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
