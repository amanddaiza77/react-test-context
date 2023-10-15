import React from 'react';
import AdminView from '../components/AdminView';
import SeatManagement from '../components/SeatManagement';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin View</h1>
      <AdminView />
      <SeatManagement />
    </div>
  );
};

export default AdminPage;
