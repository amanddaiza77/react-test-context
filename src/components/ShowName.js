// ShowName.js
import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const ShowName = () => {
  const { name } = useContext(DataContext);

  return (
    <div>
      <h1>Your Name: {name}</h1>
    </div>
  );
};

export default ShowName;
