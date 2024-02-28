import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    render(<SearchBar searchTerm="" setSearchTerm={() => {}} />);
  });

  it('renders the search input field', () => {
    const { getByPlaceholderText } = render(
      <SearchBar searchTerm="" setSearchTerm={() => {}} />
    );
    const searchInput = getByPlaceholderText('Search by name');
    expect(searchInput).toBeInTheDocument();
  });

  it('updates the search term correctly', () => {
    const setSearchTermMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar searchTerm="" setSearchTerm={setSearchTermMock} />
    );
    const searchInput = getByPlaceholderText('Search by name');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(setSearchTermMock).toHaveBeenCalledWith('test');
  });

  it('displays the provided search term', () => {
    const searchTerm = 'test';
    const setSearchTermMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTermMock} />
    );
    const searchInput = getByPlaceholderText('Search by name');
    expect(searchInput.value).toBe(searchTerm);
  });
});
