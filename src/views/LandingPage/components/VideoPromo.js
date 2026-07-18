import { AspectRatio, Box, Container, Heading, Text } from '@chakra-ui/react';
import Reveal from '../../../components/Reveal';

// Section navy konstan di kedua mode (brand.900) — DESIGN-SPEC.md §4.5.
const VideoPromo = () => {
  return (
    <Box as="section" bg="brand.900" py={{ base: 14, md: 24 }}>
      <Container maxW="7xl" px={{ base: 5, md: 8 }} textAlign="center">
        <Reveal>
          <Text
            fontSize="12px"
            fontWeight={600}
            textTransform="uppercase"
            letterSpacing="0.08em"
            color="accent.300"
          >
            Tonton
          </Text>
          <Heading
            as="h2"
            mt={2}
            color="white"
            fontSize={{ base: '28px', md: '36px' }}
            lineHeight={1.15}
          >
            Watukarung dari Dekat
          </Heading>
          <AspectRatio
            ratio={16 / 9}
            maxW="960px"
            mx="auto"
            mt={8}
            rounded="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <iframe
              src="https://youtube.com/embed/LzpdlkLtDEg"
              title='Si Bolang TRANS7 — keseharian bocah Watukarung'
              loading="lazy"
              allowFullScreen
            />
          </AspectRatio>
          <Text mt={5} mx="auto" maxW="640px" fontSize="15px" color="whiteAlpha.700">
            Selami keseharian dusun pesisir kami — dari deburan ombak Watukarung
            hingga kehidupan kampung nelayan.
          </Text>
          <Text mt={2} mx="auto" maxW="640px" fontSize="13px" color="whiteAlpha.700">
            Sumber video: program "Si Bolang" — TRANS7.
          </Text>
        </Reveal>
      </Container>
    </Box>
  );
};

export default VideoPromo;
