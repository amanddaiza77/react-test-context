import React, { createContext, useState, useContext } from 'react';

const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [remainingSeats, setRemainingSeats] = useState(10);

  const updateRemainingSeats = (count) => {
    setRemainingSeats(count);
  };

  return (
    <SeatContext.Provider value={{ remainingSeats, updateRemainingSeats }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeatContext = () => {
  return useContext(SeatContext);
};
