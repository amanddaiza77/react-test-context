import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <AdminContext.Provider value={{ registeredUsers, setRegisteredUsers }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
