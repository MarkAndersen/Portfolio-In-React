import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import Img from "./../assets/portfoliopicture.jpg";
// import "../styles/picture.css";

const styles = {
  picture: {
    maxHeight: '40%',
    maxWidth: '40%'
  }
}

function Picture() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Image src={Img} style={styles.picture} rounded fluid />
      </Row>
    </Container>
  );
}

export default Picture;
