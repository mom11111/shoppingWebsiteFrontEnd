import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col, Button,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap'
import '../Styles/home.css'
import prod1 from '../images/prod3.jpg'
import prod2 from '../images/watch.jpg'
import prod3 from '../images/bag.jpg'
import prod4 from '../images/glass.jpg'
export default function Home() {
    return (
        <div className="homePage">
        <Navbar />
         <Container fluid className="header">
             <Row>
                 <Col xs="0" sm="0" md="6" lg="6" xl="6" className="leftPart"></Col>
                 <Col xs="12" sm="12" md="6" lg="6" xl="6" className="rightPart">
                     <h1>15-20%<br/>Discount<br/>
                     </h1>
                     <h2>On all products</h2>
                 </Col>
             </Row>
         </Container>
         <Container fluid className="products">
         <h1 className="title">Explore Categories</h1>
             <Row>
                <Col xs="12" sm="12" md="7" lg="7" xl="7" className="l1">
                     <h1>Women's Fashion</h1>
                    <Button className="ShopNow">Shop Now</Button>
                </Col>
                <Col xs="12" sm="12" md="5" lg="4" xl="4" className="l2">
                        <h1>Men's Fashion</h1>
                        <Button className="ShopNow">Shop Now</Button>
                </Col>
             </Row>
             <Row>
               <Col xs="12" sm="12" md="5" lg="4" xl="4" className="l3">
                        <h1>Shoes</h1>
                       <Button className="ShopNow">Shop Now</Button>
               </Col>
               <Col xs="12" sm="12" md="7" lg="7" xl="7" className="l4">
                       <h1>Accessories</h1>
                       <Button className="ShopNow">Shop Now</Button>
                  </Col>
             </Row>
         </Container> 
         <Container fluid className="featuredColl">
             <h1>Featured Collections</h1>
             <Row>
                 <Col sm="6" md="3" lg="3" xl="3">
                   <Card>
                      <CardImg top width="100%" src={prod1} alt="Card image cap" />
                   <CardBody>
                      <CardTitle>DNK White Shoes</CardTitle>
                       <CardSubtitle>Price:1500 only</CardSubtitle>
                      <CardText>In the Stocks right now</CardText>
                      <Button>Buy</Button>
                     </CardBody>
                     </Card>
                 </Col>
                 <Col sm="6" md="3" lg="3" xl="3">
                 <Card>
                      <CardImg top width="100%" src={prod2} alt="Card image cap" />
                   <CardBody>
                      <CardTitle>DNK Wrist Watch</CardTitle>
                       <CardSubtitle>Price:1500 only</CardSubtitle>
                      <CardText>In the Stocks right now</CardText>
                      <Button>Buy</Button>
                     </CardBody>
                     </Card>
                 </Col>
                 <Col sm="6" md="3" lg="3" xl="3">
                 <Card>
                      <CardImg top width="100%" src={prod3} alt="Card image cap" />
                   <CardBody>
                      <CardTitle>DNK Hand Bags</CardTitle>
                       <CardSubtitle>Price:1500 only</CardSubtitle>
                      <CardText>In the Stocks right now</CardText>
                      <Button>Buy</Button>
                     </CardBody>
                     </Card>
                 </Col>
                 <Col sm="6" md="3" lg="3" xl="3">
                 <Card>
                      <CardImg top width="100%" src={prod4} alt="Card image cap" />
                   <CardBody>
                      <CardTitle>DNK Stylish SunGlasses</CardTitle>
                       <CardSubtitle>Price:500 only</CardSubtitle>
                      <CardText>In the Stocks right now</CardText>
                      <Button>Buy</Button>
                     </CardBody>
                     </Card>
                 </Col>
             </Row>
         </Container>  
         <Footer />
        </div>
    )
}
