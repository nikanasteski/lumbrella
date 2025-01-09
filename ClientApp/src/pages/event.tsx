import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./event.css";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

const EventCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/calendar")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id}>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.title}</p>
            <h1>{event.description}</h1>
          </div>
        ))}
      </div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
    </div>
  );
};

export default EventCalendar;
