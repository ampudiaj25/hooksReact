import React from 'react';
import ReactDOM from 'react-dom/client';
import ListUsers from './components/context/listUsers';
import { UserContextProvider } from './components/context/userContext';
import Users from './components/context/users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Users></Users>
      <ListUsers></ListUsers>
    </UserContextProvider>
     
  </React.StrictMode>
);