import React from "react";

import ListEventItem from "../list-event-item/list-event-item.component";

const ListEvent = ({ events, selectEvent}) => {
  return (
    <div className="list-event">
      {events.map((event) => (
        <ListEventItem key={event.id} events={event} selectEvent={selectEvent} />
      ))}
    </div>
  );
};

export default ListEvent;
