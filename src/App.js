import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


import NavbarHeader from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarHeader />
      <Container>
        <Row>
          <Col xs={8}>
          </Col>
          <Col xs={4}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
