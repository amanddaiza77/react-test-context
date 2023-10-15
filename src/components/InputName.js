// InputName.js
import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { useNavigate } from 'react-router-dom';

const InputName = () => {
  const { updateName } = useContext(DataContext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const inputName = e.target.value;
    updateName(inputName);
    navigate('/show');
  };

  return (
    <div>
      <input
        type="text"
        onInput={handleInput}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default InputName;
