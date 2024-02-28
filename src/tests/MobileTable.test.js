import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom/extend-expect';
import MobileTable from '../components/MobileTable';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: { city: 'New York' }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: { city: 'Los Angeles' }
  }
];

describe('MobileTable Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <MobileTable users={[]} />
      </MemoryRouter>
    );
  });

  it('displays user information correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <MobileTable users={users} />
      </MemoryRouter>
    );

    users.forEach(user => {
      expect(getByText(`ID: ${user.id}`)).toBeInTheDocument();
      expect(getByText(`Name: ${user.name}`)).toBeInTheDocument();
      expect(getByText(`Email: ${user.email}`)).toBeInTheDocument();
      expect(getByText(`City: ${user.address.city}`)).toBeInTheDocument();
    });
  });

  it('contains View Details button for each user', () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <MobileTable users={users} />
      </MemoryRouter>
    );

    expect(getAllByText('View Details')).toHaveLength(users.length);
  });
});
