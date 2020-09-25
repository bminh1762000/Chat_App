import React from "react";
import styled from "styled-components";
import { Media, Image, Button } from "react-bootstrap";

import EventListAttendee from "../event-item-attendee/event-list-attendee.component";

const ListEventItem = ({ events, selectEvent }) => {
  const { title, hostPhotoURL, venue, description, date, attendees } = events;
  return (
    <ListItemContainer>
      <ul className="list-group">
        <li className="list-group-item">
          <Media>
            <Image
              width={64}
              height={64}
              className="mr-3"
              src={hostPhotoURL}
              alt="Generic placeholder"
              roundedCircle
            />
            <Media.Body>
              <h5>{title}</h5>
            </Media.Body>
          </Media>
        </li>
        <li className="list-group-item">
          <div>
            <span className="mr-2">{date}</span>
            <span className="mr-2">{venue}</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-start">
          {attendees.map(({ id, ...otherProps }) => (
            <EventListAttendee key={id} {...otherProps} />
          ))}
        </li>
        <li className="list-group-item">
          <div>
            <p>{description}</p>
            <Button
              variant="info"
              className="float-right"
              onClick={() => selectEvent(events)}
            >
              View
            </Button>
            <Button variant="danger" className="float-right mr-2">
              Delete
            </Button>
          </div>
        </li>
      </ul>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: white;
  box-shadow: 1px 3px 12px #ecf0f1;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
`;
export default ListEventItem;
