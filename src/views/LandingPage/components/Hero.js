import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../../../assets/hero-bg.jpg';
import { stats } from '../../../variables/general';

const EASE = [0.21, 0.47, 0.32, 0.98];

// Overlay foto konstan (tidak ikut color mode) — DESIGN-SPEC.md §2.
const HERO_OVERLAY =
  'linear-gradient(to top, rgba(12, 42, 71, 0.85), rgba(12, 42, 71, 0.35) 50%, rgba(12, 42, 71, 0.15))';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Box as="section">
      <Box
        bgImage={`${HERO_OVERLAY}, url(${heroImage})`}
        bgSize="cover"
        // Posisi atas agar kaligrafi "Dusun Dokgarut" bawaan ilustrasi tidak terpotong
        bgPosition="center top"
        minH={{ base: '88vh', md: '86vh' }}
        sx={{
          // svh menghindari lompatan address-bar di browser mobile modern
          '@supports (min-height: 100svh)': {
            minHeight: { base: '88svh', md: '86vh' },
          },
        }}
        display="flex"
        alignItems="flex-end"
      >
        <Container maxW="7xl" px={{ base: 5, md: 8 }} pt={32} pb={24}>
          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : 'hidden'}
            animate="show"
          >
            <motion.div variants={itemVariants}>
              <Box
                display="inline-block"
                bg="whiteAlpha.200"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                rounded="full"
                px={4}
                py={1.5}
              >
                <Text
                  fontSize="12px"
                  fontWeight={600}
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                  color="white"
                >
                  Desa Watukarung · Kab. Pacitan
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Heading
                as="h1"
                mt={5}
                maxW="700px"
                color="white"
                fontSize={{ base: '36px', md: '52px', lg: '56px' }}
                fontWeight={800}
                lineHeight={1.05}
              >
                Dusun Dokgarut, Pesona Pesisir Selatan Jawa
              </Heading>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                mt={5}
                maxW="560px"
                fontSize={{ base: '17px', md: '18px' }}
                color="whiteAlpha.900"
              >
                Dusun pesisir berpenduduk 164 jiwa — rumah bagi ombak kelas
                dunia, pantai karang, dan kehangatan kampung nelayan.
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Flex mt={8} gap={4} wrap="wrap">
                <Button as={RouterLink} to="/#wisata" variant="onImage" size="lg">
                  Jelajahi Wisata
                </Button>
                <Button
                  as={RouterLink}
                  to="/profil"
                  variant="onImageOutline"
                  size="lg"
                >
                  Profil Dusun
                </Button>
              </Flex>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Stats strip — kartu menimpa bagian bawah hero */}
      <Container maxW="7xl" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <Box
          bg="bg.surface"
          rounded="2xl"
          shadow="raised"
          border="1px solid"
          borderColor="border.default"
          mt={-12}
        >
          <SimpleGrid columns={{ base: 1, sm: 3 }}>
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                py={6}
                px={4}
                textAlign="center"
                borderColor="border.default"
                borderTopWidth={{ base: index === 0 ? '0' : '1px', sm: '0' }}
                borderLeftWidth={{ base: '0', sm: index === 0 ? '0' : '1px' }}
              >
                <Text
                  fontFamily="heading"
                  fontSize={{ base: '32px', md: '40px' }}
                  fontWeight={800}
                  lineHeight={1.1}
                  color="text.link"
                >
                  {stat.value}
                </Text>
                <Text mt={1} fontSize="14px" fontWeight={500} color="text.secondary">
                  {stat.label}
                </Text>
                <Text fontSize="12px" color="text.muted">
                  {stat.note}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
