import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found">
            <Container>
                <Col>
                    <p>Oops!</p>
                    <p>You have been lost. 🥺</p>
                    <button to="/" >Take me back to home!</button>
                </Col>
            </Container>
        </div>
    )
}

export default NotFound;