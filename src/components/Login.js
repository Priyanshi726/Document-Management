import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Card, CardContent, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    setError('');

    if (!validateEmail(email)) {
      setError('Email is not valid');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    if (login(email, password)) {
      toast.success('Login successfully', { autoClose: 8000 });
    } else {
      toast.error('User not found');
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Container style={{ width: "28%", backgroundColor: "white", position: "absolute", right: "7%", top: "170px", padding: "25px , 15px", borderRadius: "12px" }}>
      <div style={{ position: "relative" }}>
        <Card style={{ boxShadow: "none" }}>
          <CardContent>
          <Typography
      variant="h6"
      gutterBottom
      align="center"
      style={{
        fontFamily: 'Montserrat, sans-serif', 
        fontWeight: 'bold', 
        color: '#3f51b5', 
        letterSpacing: '0.5px', 
        textTransform: 'uppercase', 
        margin: '20px 0', 
      }}
    >
      Document Management
    </Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
           <Typography align='center' style={{ marginTop: '22px', fontFamily: 'Arial, sans-serif' }}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{
          width: '35%',
       
          backgroundColor: '#4caf50',
          color: '#fff', 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '14px', 
          padding: '10px 10px',
          
          borderRadius: '5px', 
        }}
      >
        Login
      </Button>
    </Typography>
          </CardContent>
        </Card>
      </div>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default Login;
