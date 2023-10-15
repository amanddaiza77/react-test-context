// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [name, setName] = useState('');

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <DataContext.Provider value={{ name, updateName }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
