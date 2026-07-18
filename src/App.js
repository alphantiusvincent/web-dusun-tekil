import React, { lazy, Suspense } from 'react';
import { Box, Center, Flex, Link, Spinner } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ScrollManager from './components/ScrollManager.js';
import LandingPage from './views/LandingPage/index.js';

// Code-splitting per route — halaman dalam dimuat saat dibutuhkan.
const NewsPage = lazy(() => import('./views/NewsPage/index.js'));
const NewsDetail = lazy(() => import('./views/NewsDetail/index.js'));
const ProfilPage = lazy(() => import('./views/ProfilPage/index.js'));
const Pemetaan = lazy(() => import('./views/Pemetaan/pemetaan.js'));
const TeamPage = lazy(() => import('./views/TeamPage/index.js'));
const PageNotFound = lazy(() => import('./views/PageNotFound/index.js'));

const PageFallback = () => (
  <Center minH="50vh">
    <Spinner size="lg" color="brand.600" thickness="3px" />
  </Center>
);

function App() {
  return (
    <Flex direction="column" minH="100vh">
      {/* Skip link untuk pengguna keyboard — tampil hanya saat fokus */}
      <Link
        href="#konten"
        position="absolute"
        top={2}
        left={2}
        zIndex="skipLink"
        transform="translateY(-200%)"
        bg="bg.surface"
        color="text.link"
        fontWeight={600}
        px={4}
        py={2}
        rounded="lg"
        shadow="raised"
        _focus={{ transform: 'none' }}
      >
        Lewati ke konten
      </Link>
      <ScrollManager />
      <Navbar />
      <Box as="main" id="konten" flex="1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/pemetaan" element={<Pemetaan />} />
            <Route path="/tim" element={<TeamPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
