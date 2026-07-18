import { Box, Container, Link, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import CardNews from '../../../components/CardNews';
import { latestNews } from '../../../variables/general';

const LatestNews = () => {
  return (
    // bg.surface — pola zebra section landing (surface → canvas → navy → surface)
    <Box as="section" bg="bg.surface">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 14, md: 24 }}>
        <Reveal>
          <SectionHeading
            kicker="KABAR DUSUN"
            title="Berita Terbaru"
            action={
              <Link
                as={RouterLink}
                to="/news"
                color="text.link"
                fontWeight={600}
                fontSize="15px"
              >
                Lihat semua →
              </Link>
            }
          />
        </Reveal>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {latestNews.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <CardNews {...item} />
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default LatestNews;
