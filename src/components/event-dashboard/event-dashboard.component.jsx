import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import EventForm from "../event-form/event-form.component";
import ListEvent from "../list-event/list-event.component";

import sampleData from "./sampleData";

const EventDashboard = ({ formOpen, setFormOpen ,selectEvent, selectedEvent}) => {
  const [events, setEvents] = useState(sampleData);
  const handleCreateEvent = (newEvent) => setEvents([...events, newEvent]);
  

  return (
    <SectionEvent>
      <Container className="pt-5">
        <Row>
          <Col xs={8}>
            <ListEvent events={events} selectEvent={selectEvent} />
          </Col>
          <Col xs={4}>
            {formOpen && (
              <EventForm
                setFormOpen={setFormOpen}
                createEvent={handleCreateEvent}
                selectedEvent={selectedEvent}
                key={selectedEvent ? selectedEvent.id : null}
              />
            )}
          </Col>
        </Row>
      </Container>
    </SectionEvent>
  );
};

const SectionEvent = styled.section`
  background-color: #ecf0f1;
`;

export default EventDashboard;
