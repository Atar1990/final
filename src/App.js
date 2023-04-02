import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="App">
      <div className="App-content">

        {page === 'login' && <Login
          signupClicked={() => {
            setPage('signup')
          }}
          finishLogin={() => {
            setPage('home')
          }} />}

        {page === 'signup' && <Signup
          finishSignUp={() => {
            setPage('questions')
          }} />}

      </div>
    </div>
  );
}

export default App;
