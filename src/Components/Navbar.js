import React from 'react'
import {Container, Col, Row, ListGroup, ListGroupItem} from 'reactstrap'
import '../Styles/navbar.css'
import { FaWeightHanging } from "react-icons/fa";

export default function Navbar() {
    return (
        <Container fluid className="myNav">
            <Row>
                <Col Xs="12" sm="6" md="5" lg="5" xl="5" className="logo">
                    <h1>DNK</h1>
                </Col>
                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                   <ListGroup horizontal="md" className="list">
                       <ListGroupItem className="listItem" >Home</ListGroupItem>
                       <ListGroupItem className="listItem" >Store</ListGroupItem>
                       <ListGroupItem className="listItem" >Men</ListGroupItem>
                       <ListGroupItem className="listItem" >Women</ListGroupItem>
                       <ListGroupItem className="listItem" >Accessories</ListGroupItem>
                       <ListGroupItem className="listItem" >About Us</ListGroupItem>
                   </ListGroup>
                </Col>
                <Col xs="12" sm="12" md="1"lg="1" xl="1" className="basket">
                    <FaWeightHanging />
                    <h6>0</h6>
                </Col>
            </Row>
        </Container>
    )
}
