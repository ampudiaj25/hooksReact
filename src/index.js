import React from 'react';
import ReactDOM from 'react-dom/client';
import UseRef from './components/exampleUseRef/useRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Forma correcta de llamar mis componentes cuando estoy utilizando Context de react
    <UserContextProvider>
      <Users></Users>
      <ListUsers></ListUsers>
    </UserContextProvider> */}
     <UseRef></UseRef>
  </React.StrictMode>
);