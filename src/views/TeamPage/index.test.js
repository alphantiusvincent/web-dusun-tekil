import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../test-utils';
import TeamPage from './index';
import { teamMembers } from '../../variables/team';

test('menampilkan semua anggota tim', () => {
  render(
    <MemoryRouter>
      <TeamPage />
    </MemoryRouter>
  );
  teamMembers.forEach(member => {
    expect(screen.getByText(member.name)).toBeInTheDocument();
  });
});

test('klik kartu membuka poster ukuran penuh', async () => {
  render(
    <MemoryRouter>
      <TeamPage />
    </MemoryRouter>
  );
  const card = screen.getByText('Ezra Kristanto Nahumury').closest('button');
  card.click();
  expect(await screen.findByRole('dialog')).toBeInTheDocument();
});
