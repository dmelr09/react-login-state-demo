import React, { useState } from 'react';
import './App.css';
import SignIn from './Signin'
import Register from './Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = (email, password) => {
    // Simulate authentication with localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      document.body.style.backgroundColor = 'lightblue'; // Change background color
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegister = (username, email, password) => {
    // Simulate registration with localStorage
    const newUser = { username, email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now sign in.');
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    document.body.style.backgroundColor = 'white'; // Reset background color
  };

  return (
    <div className="App">
      <h1>Authentication Demo</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome! You are signed in.</h2>
          <button onClick={handleSignOut}>Sign Out</button>
          <button>Profile Management</button> {/* Add functionality for profile management */}
        </div>
      ) : (
        <div>
          <SignIn onSignIn={handleSignIn} />
          <Register onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default App;
