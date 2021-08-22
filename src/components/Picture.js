import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Img from "./../assets/portfoliopicture.jpg";
import "../styles/picture.css";

function Picture() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Image src={Img} className="img" rounded fluid />
      </Row>
    </Container>
  );
}

export default Picture;
