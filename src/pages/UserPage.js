import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import RegisteredTable from '../components/RegisteredTable';

const UserPage = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <RegisteredTable />
    </div>
  );
};

export default UserPage;
