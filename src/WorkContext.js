// src/WorkContext.js
import React, { createContext, useState, useContext } from 'react';

const WorkContext = createContext();

export const WorkProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);
  const [seatsRemaining, setSeatsRemaining] = useState(50);

  const register = (registration) => {
    setRegistrations([...registrations, registration]);
    setSeatsRemaining(seatsRemaining - 1);
  };

  const getTotalRegistrations = () => registrations.length;

  return (
    <WorkContext.Provider value={{ registrations, seatsRemaining, register, getTotalRegistrations }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useWork = () => {
  const context = useContext(WorkContext);
  if (!context) {
    throw new Error('useWork must be used within a WorkProvider');
  }
  return context;
};
