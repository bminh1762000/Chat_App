import React, { useState } from "react";

import NavbarHeader from "./components/header/header.component";
import EventDashboard from "./components/event-dashboard/event-dashboard.component";

import "./App.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <div className="App">
      <NavbarHeader setFormOpen={handleCreateFormOpen} />
      <EventDashboard
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
      />
    </div>
  );
}

export default App;
