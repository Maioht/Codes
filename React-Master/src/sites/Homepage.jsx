import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import Template from './components/template'

const HomePage = props => {
    return (
        <div>
            <Template />
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div style={{
                            marginTop: "30%"
                        }}>
                            <h1 style={{
                                color: "white",
                                textShadow: "0 0 3px #000000, 0 0 5px #000000"
                            }}>MeetingBoard</h1>
                            <h3 style={{
                                color: "#BBBBBB",
                                textShadow: "0 0 3px #000000, 0 0 5px #000000"
                            }}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...".</p></h3>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default HomePage;