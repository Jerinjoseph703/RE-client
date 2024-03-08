import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigte = useNavigate();

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      console.log(response.data); 
      if (response.status === 200) {
        
        navigte('/poperties');
    }// Assuming response.data contains the message
      // Redirect to dashboard or handle successful login
    } catch (err) {
      setError('Username or password is incorrect');
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <h1 color='primary'>Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            type='email'
            label='Email'
            variant='standard'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            type='password'
            label='Password'
            variant='standard'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </form>
        {error && <Typography variant='subtitle1' color='error'>{error}</Typography>}
        <Typography variant='h7' color='primary'>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            Create an account
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
