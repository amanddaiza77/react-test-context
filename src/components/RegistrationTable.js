// src/components/RegistrationTable.js
import React from 'react';

const RegistrationTable = ({ registrations }) => {
  return (
    <div className="mb-4">
      <h2>Registered People</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{registration.firstName}</td>
              <td className="border px-4 py-2">{registration.lastName}</td>
              <td className="border px-4 py-2">{registration.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationTable;
