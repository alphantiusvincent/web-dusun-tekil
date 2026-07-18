import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Box,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Kartu berita utama — kontrak props lihat DESIGN-SPEC.md §3.
// category: 'pemerintahan' | 'pendidikan' | 'kesehatan'
// Seluruh kartu bisa diklik menuju /news/:id (LinkOverlay pada judul).
const CardNews = ({ id, title, image, date, caption, category }) => {
  return (
    <LinkBox
      as="article"
      role="group"
      w="100%"
      h="100%"
      bg="bg.surface"
      border="1px solid"
      borderColor="border.default"
      rounded="2xl"
      overflow="hidden"
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        shadow: 'lift',
        borderColor: 'border.hover',
      }}
      _focusWithin={{
        shadow: 'lift',
        borderColor: 'border.active',
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={image} alt="" objectFit="cover" loading="lazy" />
      </AspectRatio>

      <Box p={5}>
        <Flex align="center" gap={3} wrap="wrap">
          <Badge variant={category}>{category}</Badge>
          <Text fontSize="13px" color="text.muted">
            {date}
          </Text>
        </Flex>

        <Heading
          as="h3"
          fontSize={{ base: '18px', md: '20px' }}
          lineHeight={1.4}
          noOfLines={2}
          mt={3}
          transition="color 0.2s ease"
          _groupHover={{ color: 'text.link' }}
        >
          <LinkOverlay
            as={RouterLink}
            to={`/news/${id}`}
            _focusVisible={{ outline: 'none' }}
          >
            {title}
          </LinkOverlay>
        </Heading>

        <Text fontSize="15px" color="text.secondary" noOfLines={2} mt={2}>
          {caption}
        </Text>

        <Text
          fontSize="14px"
          fontWeight={600}
          color="text.link"
          mt={3}
          opacity={0}
          transform="translateX(-4px)"
          transition="all 0.2s ease"
          _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
        >
          Baca selengkapnya →
        </Text>
      </Box>
    </LinkBox>
  );
};

export default CardNews;
