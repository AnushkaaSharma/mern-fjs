import React, { useState } from 'react';
import { Pane, TextInputField, Button, Heading, Alert } from 'evergreen-ui';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Simple validation for demonstration purposes
    if (email === 'admin@example.com' && password === 'password123') {
      setError(null);
      onLogin(true); // Pass a login status back to App
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding={20}
    >
      <Heading size={700} marginBottom={20}>
        Login to Your Account
      </Heading>
      {error && (
        <Alert intent="danger" title={error} marginBottom={20} />
      )}
      <TextInputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button appearance="primary" onClick={handleLogin}>
        Login
      </Button>
    </Pane>
  );
};

export default LoginPage;