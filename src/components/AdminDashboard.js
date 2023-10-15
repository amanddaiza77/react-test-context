// src/components/AdminDashboard.js
import React from 'react';
import RegistrationTable from './RegistrationTable';
import { useWork } from '../WorkContext';

const AdminDashboard = () => {
  const { registrations, seatsRemaining, getTotalRegistrations } = useWork();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Registrations: {getTotalRegistrations()}</p>
      <p>Seats Remaining: {seatsRemaining}</p>
      <RegistrationTable registrations={registrations} /> {/* Pass registrations as props */}
    </div>
  );
};

export default AdminDashboard;
