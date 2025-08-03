import React from 'react';

const flights = [
  { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM" },
  { id: 2, from: "Bangalore", to: "Chennai", time: "1:30 PM" },
  { id: 3, from: "Kolkata", to: "Hyderabad", time: "6:15 PM" }
];

const FlightList = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            ✈️ {flight.from} → {flight.to} at {flight.time}
            {isLoggedIn && <button style={{ marginLeft: '10px' }}>Book Ticket</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
