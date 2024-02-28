import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import '@testing-library/jest-dom/extend-expect';
import WebTable from '../components/WebTable';

// Mock user data for testing
const users = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    address: { city: 'New York' }
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    address: { city: 'Los Angeles' }
  }
];

describe('WebTable Component', () => {
  it('contains "View Details" button for each user', () => {
    const { getAllByLabelText } = render(
      <MemoryRouter>
        <WebTable users={users} />
      </MemoryRouter>
    );

    // Check if "View Details" button is present for each user
    const viewDetailsButtons = getAllByLabelText('view details');
    expect(viewDetailsButtons).toHaveLength(users.length);

    // Verify that each button has the correct link
    users.forEach((user, index) => {
      expect(viewDetailsButtons[index]).toHaveAttribute('href', `/users/${user.id}`);
    });
  });
});
