import React, { createContext, useContext, useReducer } from 'react';

const RegistrationContext = createContext();

export const useRegistrationContext = () => {
  return useContext(RegistrationContext);
};

const initialState = {
  registrations: [],
  remainingSeats: 10,
  adminInfo: {
    location: 'Office', // Default location
  },
  remainingSeatsAll: 10,
  seatCounter: 1,
};

const registrationReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      const newRegistration = {
        ...action.payload,
        seat: state.seatCounter, // Assign the seat number
      };
      return {
        ...state,
        registrations: [...state.registrations, newRegistration],
        remainingSeats: state.remainingSeats - 1,
        remainingSeatsAll: state.remainingSeatsAll,
        seatCounter: state.seatCounter + 1, // Increment seat counter
      };
    case 'UPDATE_LOCATION':
      return {
        ...state,
        adminInfo: {
          ...state.adminInfo,
          location: action.payload,
        },
      };
    case 'UPDATE_SEAT':
      const { id, newSeat } = action.payload;
      const isSeatTaken = state.registrations.some(user => user.seat === newSeat);
      if (!isSeatTaken) {
        console.log(state.registrations);
        const updatedRegistrations = state.registrations.map(user =>
          user.seat === id ? { ...user, seat: newSeat } : user
        );
        return {
          ...state,
          registrations: updatedRegistrations,
        };
      }
      return state;
    default:
      return state;
  }
};

export const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <RegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationContext.Provider>
  );
};
