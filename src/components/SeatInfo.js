import React from 'react';
import { useRegistrationContext } from '../contexts/RegistrationContext';

function SeatInfo() {
  const { state } = useRegistrationContext();
  console.log(state.remainingSeats * 100 / state.remainingSeatsAll);
  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">Seat Information</h2>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-white"
          style={{ width: 100 - (state.remainingSeats * 100 / state.remainingSeatsAll) + "%" }}
        >
          {100 - (state.remainingSeats * 100 / state.remainingSeatsAll)}%
        </div>
      </div>
      <div>
        Remaining Seats: {state.remainingSeats}
      </div>
      <div>
        Total Registered: {state.registrations.length}
      </div>
    </div>
  );
}

export default SeatInfo;
