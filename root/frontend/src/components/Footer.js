import { Container, Row, Col } from "react-bootstrap"

export default function Footer () {
    return <footer className="footer">
        <Container fluid>
            <Row className>
               <Col>
                    C1
               </Col> 
               <Col>
                    C2
               </Col>
               <Col>
                    C3
               </Col> 
            </Row>
        </Container>
    </footer>
}