import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };

  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Event handlers to update state variables
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Function to handle form submission
  const handleCreate = async (event) => {
    event.preventDefault();
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
       
        return; 
        // Exit the function early if passwords don't match
    }

    try {
        const response = await axios.post('http://127.0.0.1:5000/addUser', {
            username,
            email,
            password,
            confirmPassword,
        });
        console.log('Account Created', response.data);
       
        navigate('/login');
    } catch (error) {
        console.error('Error during signup', error.response.data);
        
        console.log(error.response.data);
    }
};
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <h1 color="primary">Signup</h1>
        <form onSubmit={handleCreate}>
          <TextField
            type="text"
            label="Username"
            variant="standard"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <br />
          <TextField
            type="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <TextField
            type="password"
            label="Re-enter Password"
            variant="standard"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <br />
          <Button type="submit"
           variant="contained"
           onClick={handleCreate}>
            Signup
          </Button>
        </form>
        <Typography variant="h7" color="primary">
          <Link to="/Login" style={{ color: 'primary', textDecoration: 'none' }}>
            {' '}
            Already have an account
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
