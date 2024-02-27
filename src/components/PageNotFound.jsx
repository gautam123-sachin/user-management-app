import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
                Oops! Page not found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for might have been removed or doesn't exist.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Go to Home
            </Button>
        </Box>
    );
};

export default PageNotFound;
