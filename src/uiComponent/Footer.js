import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <p>Copyright © 2020 The Great Boxing. All rights reserved. Made with ♥️</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;