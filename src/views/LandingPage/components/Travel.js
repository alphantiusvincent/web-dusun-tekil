import { Box, Container } from '@chakra-ui/react';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import CardTravel from '../../../components/CardTravel';
import { TravelPlace } from '../../../variables/general';

// Satu struktur responsif: grid 3 kolom di md+, scroll-snap horizontal di mobile.
const Travel = () => {
  return (
    <Box as="section" id="wisata" bg="bg.canvas" py={{ base: 14, md: 24 }}>
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <Reveal>
          <SectionHeading
            kicker="JELAJAHI DOKGARUT"
            title="Destinasi & Fasilitas Wisata"
            description="Pantai karang, sungai jernih, hingga area camping di sekitar Dusun Dokgarut."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Box
            display={{ base: 'flex', md: 'grid' }}
            gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
            gap={{ base: 4, md: 6 }}
            overflowX={{ base: 'auto', md: 'visible' }}
            px={{ base: 5, md: 0 }}
            mx={{ base: -5, md: 0 }}
            sx={{
              scrollSnapType: { base: 'x mandatory', md: 'none' },
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {TravelPlace.map(place => (
              <Box
                key={place.title}
                minW={{ base: '78vw', md: '0' }}
                sx={{ scrollSnapAlign: { base: 'center', md: 'none' } }}
              >
                <CardTravel
                  title={place.title}
                  image={place.image}
                  location={place.location}
                  category={place.category}
                />
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Travel;
