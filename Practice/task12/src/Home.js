import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = null; 
  return (
    <div>
      <h1>Authentication System</h1>

      {!user ? (
        <div>
          <p>Please sign in or sign up to access your account.</p>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Phone Number: {user.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
