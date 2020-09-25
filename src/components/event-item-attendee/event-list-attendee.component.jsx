import React from "react";

import { Image } from "react-bootstrap";

const EventListAttendee = ({name, photoURL}) => {
  return (
    <div className='mr-2'>
      <Image
        width={50}
        height={50}
        className="mr-3"
        src={photoURL}
        alt="Image Attendee"
        roundedCircle
      />
      {name}
    </div>
  );
};

export default EventListAttendee;
