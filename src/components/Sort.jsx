import React from 'react';
import { Select, MenuItem } from '@mui/material'; 

const Sort = ({ sortBy, handleSort }) => {
  return (
    <Select
      value={sortBy}
      size="small"
      onChange={(e) => handleSort(e.target.value)}
      displayEmpty
      inputProps={{ 'aria-label': 'Sort By' }}
      data-testid="sort-select"
    >
      <MenuItem value="" disabled>
        Sort By
      </MenuItem>
      <MenuItem value="id">ID</MenuItem>
      <MenuItem value="username">Username</MenuItem>
      <MenuItem value="name">Name</MenuItem>
    </Select>
  );
};

export default Sort;
