import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';
import Loading from './components/Loading';

function App() {
  const [page, setPage] = useState('map');

  useEffect(() => {
    setTimeout(() => {
      setPage('map')
    }, 5000);
  }, [])

  return (
    <div className="App">
      <div className="App-content">

        {page === 'login' && <Login
          signupClicked={() => {
            setPage('signup')
          }
          }
          finishLogin={() => {
            setPage('home')
          }} />}

        {page === 'signup' && <Signup
          finishSignUp={() => {
            setPage('questions')
          }} />}

        {page === 'map' && <Map />}

        {page === 'loading' && <Loading />}

      </div>
    </div>
  );
}

export default App;
