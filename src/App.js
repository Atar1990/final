import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="App">
      <div className="App-content">
        {page === 'login' && <Login signupClicked={() => { setPage('signup') }} />}
        {page === 'signup' && <Signup />}
      </div>
    </div>
  );
}

export default App;
