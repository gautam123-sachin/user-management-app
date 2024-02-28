import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchBar from './SearchBar';
import Pagination from '@mui/material/Pagination';

import Sort from './Sort';
import WebTable from './WebTable';
import MobileTable from './MobileTable';

const UserList = ({ users, loading, error }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const usersPerPage = 10;

  const filteredUsers = users
  .filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      case 'username':
        return a.username.localeCompare(b.username, undefined, { sensitivity: 'base' });
      case 'id':
        return a.id - b.id;
      default:
        return 0;
    }
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSort = (criteria) => {
    if (criteria === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">
          Error: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="div">
              User Lists
            </Typography>
            <Box sx={{ marginBottom: '10px' }}>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Box>
            <Box sx={{ marginBottom: '10px' }}>
               <Sort sortBy={sortBy} handleSort={handleSort} />
            </Box>
            {isMobile ? (
              <MobileTable users={currentUsers} />
            ) : (
              <WebTable users={currentUsers} />
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size={isMobile ? 'small' : 'medium'}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserList;
