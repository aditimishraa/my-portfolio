import './CreditsFooter.css';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const CreditsFooter = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
        <Container fluid className="credits-footer">
                <Row>
                    <Col className="footer-copywright" >
                        <h3 className='credits-left'>Designed and Developed by Aditi Mishra</h3>
                    </Col>
                    <Col className="footer-copywright">
                        <h3 className='credits-right'>Copyright © {year} A.</h3>
                    </Col>
                </Row>
        </Container>
  )
}

export default CreditsFooter