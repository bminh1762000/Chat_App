import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import cuid from "cuid";

const EventForm = ({ setFormOpen, createEvent, selectedEvent}) => {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    country: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: "Bob",
      attendees: [],
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    });
    setFormOpen(false);
  };

  return (
    <>
      <FormEventContainer onSubmit={handleFormSubmit}>
        <h4 className="text-left mb-3">Create New Event</h4>
        <Form.Group controlId="Title">
          <Form.Control
            name="title"
            type="text"
            placeholder="Event Title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId="Category">
          <Form.Control
            name="category"
            type="text"
            placeholder="Category"
            value={values.category}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            value={values.description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Country">
          <Form.Control
            name="country"
            type="text"
            placeholder="Country"
            value={values.country}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="City">
          <Form.Control
            name="city"
            type="text"
            placeholder="City"
            value={values.city}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Venue">
          <Form.Control
            name="venue"
            type="text"
            placeholder="Venue"
            value={values.venue}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Date">
          <Form.Control
            name="date"
            type="date"
            placeholder="Date"
            value={values.date}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" className="float-right">
          Submit
        </Button>
        <Button
          variant="secondary"
          type="button"
          className="float-right mr-2"
          onClick={() => setFormOpen(false)}
        >
          Cancel
        </Button>
      </FormEventContainer>
    </>
  );
};

const FormEventContainer = styled(Form)`
  padding: 1rem 1.5rem 3rem 1.5rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 1px 3px 12px #ecf0f1;
`;

export default EventForm;
