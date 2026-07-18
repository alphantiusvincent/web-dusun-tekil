import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react';
import SectionHeading from '../../../components/SectionHeading';
import Reveal from '../../../components/Reveal';
import { institutionSupports } from '../../../variables/general';

const Supports = () => {
  return (
    // bg.surface — pola zebra section landing (surface → canvas → navy → surface)
    <Box as="section" bg="bg.surface">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 14, md: 24 }}>
        <Reveal>
          <SectionHeading
            align="center"
            kicker="PENGGERAK DUSUN"
            title="Lembaga & Program Dusun"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} gap={4}>
            {institutionSupports.map(institution => (
              <Box
                key={institution.title}
                role="group"
                // Putih konstan di kedua mode — logo PNG transparan butuh latar terang.
                bg="white"
                rounded="xl"
                border="1px solid"
                borderColor="border.default"
                p={5}
                textAlign="center"
                transition="all 0.2s ease"
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lift',
                  borderColor: 'border.hover',
                }}
              >
                <Image
                  src={institution.image}
                  alt={institution.title}
                  mx="auto"
                  h="64px"
                  objectFit="contain"
                  loading="lazy"
                  filter="grayscale(100%)"
                  opacity={0.65}
                  transition="all 0.3s ease"
                  _groupHover={{ filter: 'grayscale(0)', opacity: 1 }}
                />
                <Text mt={3} fontSize="13px" fontWeight={600} color="gray.700">
                  {institution.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Supports;
