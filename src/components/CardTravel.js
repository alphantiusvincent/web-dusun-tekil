import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import fallbackImage from '../assets/WATUKARUNG06.jpg';

// Kartu destinasi immersive 4:5 — kontrak props lihat DESIGN-SPEC.md §3.
// Seluruh kartu adalah link eksternal ke Google Maps (props location).
const CardTravel = ({ title, image, location, category }) => {
  return (
    <Link
      href={location}
      isExternal
      role="group"
      display="block"
      rounded="2xl"
      transition="all 0.2s ease"
      _hover={{ transform: 'translateY(-2px)', shadow: 'lift' }}
    >
      <AspectRatio ratio={4 / 5} rounded="2xl" overflow="hidden">
        <Box position="relative" w="100%" h="100%">
          <Image
            src={image}
            onError={event => {
              // Chakra mengabaikan fallbackSrc saat loading="lazy" — tangani manual.
              if (!event.currentTarget.dataset.fellback) {
                event.currentTarget.dataset.fellback = 'true';
                event.currentTarget.src = fallbackImage;
              }
            }}
            alt=""
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
            transition="transform 0.4s ease"
            _groupHover={{ transform: 'scale(1.05)' }}
          />

          {/* Overlay gradient konstan kedua mode (DESIGN-SPEC.md §2) */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(12,42,71,0.85), rgba(12,42,71,0.35) 50%, rgba(12,42,71,0.15))"
          />

          <Box position="absolute" insetX={0} bottom={0} p={5} zIndex={1}>
            <Box
              as="span"
              display="inline-block"
              bg="blackAlpha.600"
              backdropFilter="blur(4px)"
              color="white"
              fontSize="12px"
              fontWeight={600}
              px={3}
              py={1}
              rounded="full"
            >
              {category}
            </Box>

            <Heading as="h3" color="white" fontSize="20px" mt={3} noOfLines={2}>
              {title}
            </Heading>

            <Flex align="center" gap={2} mt={2}>
              <Icon as={FaMapMarkerAlt} boxSize="14px" color="whiteAlpha.800" />
              <Text fontSize="13px" color="whiteAlpha.800">
                Watukarung, Pacitan
              </Text>
            </Flex>
          </Box>
        </Box>
      </AspectRatio>
    </Link>
  );
};

export default CardTravel;
