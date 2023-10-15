import React, { useState } from 'react';
import { useRegistrationContext } from '../contexts/RegistrationContext';

function RegistrationForm() {
  const { state, dispatch } = useRegistrationContext();
  const [formData, setFormData] = useState({ name: '', surname: '', telephone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const nameRegex = /^[a-zA-Z]+$/;
    const surnameRegex = /^[a-zA-Z]+$/;
    const telephoneRegex = /^[0-9]{10}$/;

    if (
      formData.name &&
      formData.surname &&
      formData.telephone &&
      state.remainingSeats > 0
    ) {
      dispatch({ type: 'REGISTER_USER', payload: { ...formData } });
      setFormData({ name: '', surname: '', telephone: '' });
    } else {
      alert('Please check name, surname, and telephone numbers.');
    }
  };

  return (
    <div className="border p-4">
      <h1 className="text-xl font-semibold mb-4">User View</h1>
      <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          placeholder="Telephone"
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleRegister} disabled={state.remainingSeats <= 0} className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </div>
  );
}

export default RegistrationForm;
