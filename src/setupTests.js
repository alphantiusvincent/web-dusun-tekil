// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Catatan: pakai fungsi polos (bukan jest.fn) karena react-scripts
// menyetel resetMocks: true yang mengosongkan mockImplementation per test.

// jsdom tidak mengimplementasikan matchMedia — dibutuhkan Chakra
// (initialColorMode 'system') dan framer-motion (useReducedMotion).
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// jsdom juga tidak punya IntersectionObserver — dipakai scrollspy ProfilPage
// dan whileInView framer-motion.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// scrollTo dipanggil ScrollManager pada setiap navigasi.
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => {},
});
