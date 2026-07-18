import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import DataWilayah from './components/DataWilayah';
import VisiMisi from './components/VisiMisi';
import LogoKabupaten from './components/LogoKabupaten';
import KondisiGeo from './components/KondisiGeo';

const SECTIONS = [
  { id: 'datawilayah', label: 'Data Wilayah' },
  { id: 'visimisi', label: 'Visi & Misi' },
  { id: 'logodesa', label: 'Logo Desa' },
  { id: 'kondisigeografis', label: 'Kondisi Geografis' },
];

export default function ProfilPage() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  // Scrollspy sederhana: tandai section yang sedang berada di area baca.
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      <PageHeader
        kicker="TENTANG KAMI"
        title="Profil Dusun Tekil"
        htmlTitle="Profil — Dusun Tekil"
        description="Mengenal Dusun Tekil lebih dekat — data wilayah, visi misi, lambang desa, hingga kondisi geografis Desa Watukarung sebagai desa induknya."
        breadcrumb={[{ label: 'Beranda', to: '/' }, { label: 'Profil' }]}
      />

      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
        <Grid templateColumns={{ base: '1fr', lg: '240px 1fr' }} gap={{ base: 8, lg: 14 }}>
          <Box
            as="nav"
            aria-label="Navigasi profil"
            display={{ base: 'none', lg: 'block' }}
            position="sticky"
            top="96px"
            alignSelf="start"
          >
            <Stack spacing={0}>
              {SECTIONS.map(({ id, label }) => {
                const isActive = activeId === id;
                return (
                  <Link
                    key={id}
                    as={RouterLink}
                    to={`/profil#${id}`}
                    display="block"
                    fontSize="15px"
                    fontWeight={isActive ? 600 : 500}
                    color={isActive ? 'text.link' : 'text.secondary'}
                    pl={4}
                    py={2}
                    borderLeft="2px solid"
                    borderColor={isActive ? 'brand.600' : 'border.default'}
                    bg={isActive ? 'brand.50' : 'transparent'}
                    _dark={{ bg: isActive ? 'bg.subtle' : 'transparent' }}
                    _hover={{ color: 'text.link' }}
                    transition="all 0.2s ease"
                  >
                    {label}
                  </Link>
                );
              })}
            </Stack>
          </Box>

          <Stack maxW="760px" spacing={16}>
            <Box id="datawilayah">
              <Reveal>
                <DataWilayah />
              </Reveal>
            </Box>
            <Box id="visimisi">
              <Reveal>
                <VisiMisi />
              </Reveal>
            </Box>
            <Box id="logodesa">
              <Reveal>
                <LogoKabupaten />
              </Reveal>
            </Box>
            <Box id="kondisigeografis">
              <Reveal>
                <KondisiGeo />
              </Reveal>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
