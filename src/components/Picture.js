import React from "react"
import Container from "react-bootstrap/Container";
import Image  from "react-bootstrap/Image";
import Img from "./../assets/portfoliopicture.jpg"

function Headshot() {
    return (
    
        <Container className="justify-content-center" >
            <Image src={Img} roundedCircle />
        </Container>
    )
};


export default Headshot;