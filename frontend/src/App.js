import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DisplayPage from './components/DisplayPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <DisplayPage />
      ) : (
        <LoginPage onLogin={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
