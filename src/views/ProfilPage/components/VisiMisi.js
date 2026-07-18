import React from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const MISI = [
  'Mengembangkan potensi wisata alam dan budaya secara berkelanjutan, khususnya wisata pantai, surfing, dan keindahan alam pesisir.',
  'Meningkatkan kualitas sumber daya manusia melalui pelatihan, pemberdayaan masyarakat, dan peningkatan keterampilan, termasuk kemampuan berbahasa asing untuk mendukung pariwisata internasional.',
  'Meningkatkan sarana dan prasarana pendukung wisata seperti penginapan, toilet, tempat parkir, warung makan, serta fasilitas umum lainnya agar wisatawan merasa nyaman dan aman.',
  'Menjaga kelestarian lingkungan dengan menjaga kebersihan pantai, pengelolaan sampah, dan pelestarian terumbu karang serta ekosistem laut.',
  'Meningkatkan promosi dan branding Desa Wisata Watukarung melalui berbagai media, termasuk internet dan media sosial, untuk menjangkau pasar wisatawan yang lebih luas.',
  'Meningkatkan partisipasi masyarakat dalam pengelolaan dan pengembangan wisata, sehingga manfaat ekonomi dapat dirasakan langsung oleh warga desa.',
];

const VisiMisi = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h2" fontSize={{ base: '24px', md: '28px' }}>
        Visi &amp; Misi
      </Heading>

      <Box
        bg="brand.50"
        _dark={{ bg: 'bg.subtle' }}
        borderLeft="4px solid"
        borderColor="accent.500"
        rounded="lg"
        p={6}
      >
        <Text
          fontSize={{ base: '18px', md: '20px' }}
          fontWeight={600}
          lineHeight={1.6}
          color="text.primary"
        >
          “Menjadi desa wisata unggulan yang memanfaatkan potensi alam, budaya, dan sumber daya
          manusia untuk meningkatkan kesejahteraan masyarakat serta menarik wisatawan domestik dan
          mancanegara.”
        </Text>
      </Box>

      <Heading as="h3" fontSize={{ base: '18px', md: '20px' }}>
        Misi
      </Heading>

      <Stack spacing={4}>
        {MISI.map((item, i) => (
          <Flex key={item} gap={4} align="flex-start">
            <Flex
              boxSize="28px"
              rounded="full"
              bg="brand.600"
              color="white"
              fontSize="14px"
              fontWeight={700}
              align="center"
              justify="center"
              flexShrink={0}
              mt="2px"
            >
              {i + 1}
            </Flex>
            <Text fontSize="16px" lineHeight={1.7} color="text.secondary">
              {item}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default VisiMisi;
