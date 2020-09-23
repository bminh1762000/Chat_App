import React, { useState } from "react";

import { Form } from "react-bootstrap";

const EventForm = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </Form>
    </>
  );
};
