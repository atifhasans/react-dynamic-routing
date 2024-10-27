import React from 'react';
import { Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const GoToProducts = () => {
    navigate('products');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#f4f6f8' }}>
      <Paper elevation={3} sx={{ p: 4, width: { xs: '90%', sm: '400px' }, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={2} alignItems="center">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, width: '100%' }}
            onClick={GoToProducts}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
