import React from 'react';
import { render, act } from '@testing-library/react';
import { getUsers } from '../api/index';
import useFetchUsers from '../hooks/useFetchUsers';

jest.mock('../api/index');

describe('useFetchUsers', () => {
  it('fetches users successfully', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
    getUsers.mockResolvedValue(mockUsers);

    const TestComponent = () => {
      const { users, loading, error } = useFetchUsers();

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); 
    });

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
  });

  it('handles error when fetching users fails', async () => {

    const errorMessage = 'Failed to fetch users';
    getUsers.mockRejectedValue(new Error(errorMessage));

    const TestComponent = () => {
      const { users, loading, error } = useFetchUsers();

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0)); 
    });

    expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });
});
