import React, { useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { useSeatContext } from '../contexts/SeatContext'; // Add this line

const RegistrationForm = () => {
  const { registerUser } = useUserContext();
  const { remainingSeats, updateRemainingSeats } = useSeatContext(); // Add this line
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleRegistration = () => {
    if (remainingSeats > 0) {
      const user = { name, surname, telephone };
      registerUser(user);
      updateRemainingSeats(remainingSeats - 1); // Update remaining seats
      setName('');
      setSurname('');
      setTelephone('');
    } else {
      alert('No seats remaining!');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
