import React from 'react';
import { useSeatContext } from '../contexts/SeatContext';

const SeatManagement = () => {
  const { remainingSeats } = useSeatContext();

  return (
    <div>
      <div>Remaining Seats: {remainingSeats}</div>
    </div>
  );
};

export default SeatManagement;
