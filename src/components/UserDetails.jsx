import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Paper, Grid, Divider, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  console.log('userId', userId);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const handleBack = () => {
  navigate('/');
}

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={handleBack} data-testid="back-button">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Loading...
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={handleBack} data-testid="back-button">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Error: {error.message}
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={handleBack} data-testid="back-button">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            User Information
          </Typography>
          <Divider />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">ID:</Typography>
              <Typography>{user.id}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Name:</Typography>
              <Typography>{user.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Username:</Typography>
              <Typography>{user.username}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Email:</Typography>
              <Typography>{user.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">City:</Typography>
              <Typography>{user.address.city}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Phone:</Typography>
              <Typography>{user.phone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Website:</Typography>
              <Typography>{user.website}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default UserDetails;
