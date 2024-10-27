import React from 'react';
import { Typography, TextField, Button, Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f7f7f7">
      <Card sx={{ maxWidth: 400, boxShadow: 3, p: 3, borderRadius: 3 }}>
        <CardContent>
          <Box className="d-flex flex-column align-items-center gap-3">
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
              Create an Account
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Enter a secure password"
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                width: '100%',
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
