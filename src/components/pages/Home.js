import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Img from "../../assets/portfoliopicture.jpg";

const styles = {
  div: {
    borderTop: "darkcyan",
    borderTopStyle: "groove",
  },
  picture: {
    maxHeight: "40vh",
    maxWidth: "40vw",
  },
};

function Home() {
  return (
    <Container>
      <Image src={Img} style={styles.picture} roundedCircle fluid />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
      <div className="justify-content-center" style={styles.div}>
        <h1>About Me:</h1>
        <p style={styles.div}>
          Hi! My name is Mark Andersen, I am an aspiring web developer currently
          participating in the Full Stack Uconn bootcamp. I have an extensive
          background in retail I currently manage the Services and Fulfillment
          departments at my local Home Depot. I graduated from Western
          Connecticut State University in the fall of 2015 with a B.S. in
          Meteorology. I am looking to tie in the skills I acquire during this
          program with my educational background studying and forecasting
          weather.
        </p>
      </div>
      </Col>
      </Row>
    </Container>
  );
}
export default Home;
