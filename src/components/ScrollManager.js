import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Scroll ke atas saat pindah halaman; scroll ke elemen saat URL punya hash.
// - Navigasi Back/Forward (POP) dibiarkan: browser merestorasi posisi sendiri.
// - location.key ikut dipantau agar klik ulang link hash yang sama tetap men-scroll.
// - Elemen target bisa belum ada karena route di-lazy-load — coba ulang sebentar.
// Offset navbar sticky ditangani global style `[id] { scrollMarginTop }` di theme.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (!hash) {
      if (navigationType !== 'POP') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
      return;
    }

    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 40) {
        timer = setTimeout(tryScroll, 150);
      }
    };
    tryScroll();

    return () => clearTimeout(timer);
  }, [pathname, hash, key, navigationType]);

  return null;
}
