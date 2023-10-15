import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const registerUser = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
  };

  return (
    <UserContext.Provider value={{ registeredUsers, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};