import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import RegisteredUsersTable from '../components/RegisteredUsersTable';

const UserPage = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <RegisteredUsersTable />
    </div>
  );
};

export default UserPage;
