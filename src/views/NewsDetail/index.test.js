import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '../../test-utils';
import NewsDetail from './index';
import { allNews } from '../../variables/general';
import newsArticles from '../../variables/newsArticles';

const renderAt = path =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/news" element={<div>Daftar Berita</div>} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
      </Routes>
    </MemoryRouter>
  );

test('menampilkan artikel lengkap sesuai id', () => {
  renderAt('/news/phbs-first-aid');
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /Edukasi Perilaku Hidup Bersih dan Sehat/i,
    })
  ).toBeInTheDocument();
  // Paragraf pembuka artikel ikut ter-render
  expect(screen.getByText(/riuh sejak pagi/i)).toBeInTheDocument();
});

test('id tak dikenal dialihkan ke daftar berita', () => {
  renderAt('/news/tidak-ada');
  expect(screen.getByText('Daftar Berita')).toBeInTheDocument();
});

test('setiap berita punya isi artikel', () => {
  allNews.forEach(item => {
    expect(newsArticles[item.id]).toBeDefined();
    expect(newsArticles[item.id].length).toBeGreaterThan(0);
  });
});
