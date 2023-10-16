import React, { useState } from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import RegistrationForm from './components/RegistrationForm';
import AdminView from './components/AdminView';
import RegisteredTable from './components/RegisteredTable';
import SeatInfo from './components/SeatInfo';
import { RegistrationProvider } from './contexts/RegistrationContext';

function App() {
  const [isAdminView, setIsAdminView] = useState('');
  const toggleView = (tab) => {
    console.log(tab);
    setIsAdminView(tab);
  };
  return (
    // ----------------------------------------start---------------------------
    <RegistrationProvider>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <a
            onClick={() => toggleView('admin')}
            aria-current={isAdminView === 'admin' ? 'page' : null} // Conditional aria-current
            className={isAdminView === 'admin' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}
          >
            Admin
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => toggleView('user')}
            aria-current={isAdminView === 'user' ? 'page' : null} // Conditional aria-current
            className={isAdminView === 'user' ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}
          >
            User
          </a>
        </li>
      </ul>
      <div className="container mx-auto p-4" style={{ textAlign: 'center' }}>
        <h1 className="text-3xl font-semibold mb-4">Work Registration System</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center">
          <div className='w-2/4'>
            {isAdminView == 'admin' ? (
              <>
                <AdminView />
              </>
            ) : (
              <>
                <RegistrationForm />
                <RegisteredTable />
              </>
            )}
            <SeatInfo />
          </div>
        </div>
      </div>
    </RegistrationProvider>
    // -------------------------------------------end----------------------------------------
  );
}

export default App;
