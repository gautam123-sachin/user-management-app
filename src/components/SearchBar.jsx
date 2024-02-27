import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      margin="normal"
      InputLabelProps={{ shrink: true }}
      sx={{ mb: 2 }}
      placeholder="Search by name"
      type="search"
      size="small"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
