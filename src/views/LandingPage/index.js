import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Travel from './components/Travel';
import VideoPromo from './components/VideoPromo';
import Supports from './components/Supports';

// Urutan section sesuai DESIGN-SPEC.md §4 "Landing".
// Travel membawa id="wisata" pada Box root-nya (target anchor /#wisata).
export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Dusun Dokgarut — Desa Watukarung, Pacitan</title>
      </Helmet>
      <Hero />
      <LatestNews />
      <Travel />
      <VideoPromo />
      <Supports />
    </>
  );
}
