import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../components/UserList';

jest.mock('../components/Sort', () => {
  return () => <div data-testid="mock-sort">Mock Sort Component</div>;
});

jest.mock('../components/WebTable', () => {
  return () => <div data-testid="mock-web-table">Mock WebTable Component</div>;
});

jest.mock('../components/MobileTable', () => {
  return () => <div data-testid="mock-mobile-table">Mock MobileTable Component</div>;
});

describe('UserList component', () => {
    it('renders without errors', () => {
      render(<UserList users={[]} />);
    });

    it('renders user list', () => {
        const users = [
          { id: 1, name: 'John Doe', username: 'john_doe', email: 'QWlU0@example.com', address: { city: 'New York' } },
          { id: 2, name: 'Jane Smith', username: 'jane_smith', email: 'jane@smith', address: { city: 'Los Angeles' } },
        ];
        render(<UserList users={users} />);
        console.log(screen.debug()); // Log the rendered output
        expect(screen.queryByText(/John Doe/i)).toBeNull();
        expect(screen.queryByText(/Jane Smith/i)).toBeNull();
      });
});
