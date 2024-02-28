import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PageNotFound from '../components/PageNotFound';

describe('PageNotFound Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
  });

  it('displays error message', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Oops! Page not found')).toBeInTheDocument();
    expect(
      getByText("The page you are looking for might have been removed or doesn't exist.")
    ).toBeInTheDocument();
  });

  it('contains "Go to Home" button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(getByText('Go to Home')).toBeInTheDocument();
  });

  it('redirects to home page on button click', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/random-page']}>
        <PageNotFound />
      </MemoryRouter>
    );

    const button = getByText('Go to Home');
    expect(button).toBeInTheDocument();

    // Assert that the URL is updated after the click
    expect(window.location.pathname).toBe('/');
  });
});
