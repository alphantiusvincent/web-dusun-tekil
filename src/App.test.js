import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render } from './test-utils';
import App from './App';

test('menampilkan nama dusun', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const elements = screen.getAllByText(/Dusun Dokgarut/i);
  expect(elements.length).toBeGreaterThan(0);
});
