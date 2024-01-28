import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import logo from './logo.svg';
import './App.css';
import UserProvider from './auth/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavigationBar/>
      </UserProvider>
    </div>
  );
}

export default App;
