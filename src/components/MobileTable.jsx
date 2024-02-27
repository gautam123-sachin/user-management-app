import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MobileTable = ({ users }) => {
    return (
        <Grid container spacing={2}>
            {users.map((user) => (
                <Grid item xs={12} key={user.id}>
                    <Card sx={{ backgroundColor: '#f5f5f5' }}>
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                ID: {user.id}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Name: {user.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Email: {user.email}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                City: {user.address.city}
                            </Typography>
                            <Button variant="contained" color="primary" component={Link} to={`/users/${user.id}`} sx={{display:'flex'}}>
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MobileTable;
