import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import LogoDesa from '../../../assets/logo_watukarung-removebg-preview.png';

const MAKNA_LAMBANG = [
  {
    judul: 'Lingkaran dan Bingkai Emas',
    deskripsi:
      'Melambangkan persatuan dan kesatuan masyarakat, serta mencerminkan kejayaan, kemuliaan, dan harapan akan kemajuan Desa Watukarung.',
  },
  {
    judul: 'Tulisan “Pemerintah Desa Watukarung – Kecamatan Pringkuku”',
    deskripsi:
      'Menunjukkan identitas resmi pemerintahan desa sebagai bagian dari wilayah administratif Kecamatan Pringkuku.',
  },
  {
    judul: 'Perisai (Tameng) Tengah',
    deskripsi:
      'Melambangkan perlindungan dan kesiapan desa dalam menghadapi tantangan, serta mencerminkan keberanian (merah) dan ketenangan (biru) dalam kehidupan bermasyarakat.',
  },
  {
    judul: 'Ombak Laut',
    deskripsi:
      'Menggambarkan karakter geografis desa yang berada di pesisir, melambangkan potensi wisata bahari seperti pantai, surfing, dan kehidupan nelayan sebagai sumber ekonomi utama.',
  },
  {
    judul: 'Pohon Kelapa dan Gunung',
    deskripsi:
      'Simbol sumber daya alam desa, di mana pohon kelapa menunjukkan tanaman produktif pesisir, dan gunung mencerminkan keteguhan serta kondisi topografi berbukit.',
  },
  {
    judul: 'Tugu/Bangunan Ikonik',
    deskripsi:
      'Melambangkan identitas atau ikon desa, serta mencerminkan kemajuan pembangunan dan pusat kegiatan budaya masyarakat.',
  },
  {
    judul: 'Padi dan Kapas',
    deskripsi:
      'Simbol kemakmuran dan keadilan sosial, di mana padi melambangkan ketahanan pangan, dan kapas menunjukkan kesejahteraan sandang masyarakat desa.',
  },
];

const MAKNA_WARNA = [
  {
    judul: 'Merah',
    swatch: 'red.500',
    deskripsi:
      'Melambangkan semangat, keberanian, dan tekad masyarakat Desa Watukarung dalam membangun dan mempertahankan nilai-nilai lokal.',
  },
  {
    judul: 'Biru',
    swatch: 'blue.500',
    deskripsi:
      'Simbol kedamaian, ketenangan, dan kesetiaan, serta menggambarkan kekayaan laut sebagai potensi wisata dan sumber kehidupan utama.',
  },
  {
    judul: 'Kuning Emas',
    swatch: 'yellow.400',
    deskripsi:
      'Menandakan kejayaan, kemuliaan, optimisme, dan harapan atas masa depan Desa Watukarung yang lebih maju dan sejahtera.',
  },
];

const LogoKabupaten = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h2" fontSize={{ base: '24px', md: '28px' }}>
        Logo Desa Watukarung
      </Heading>

      <Box bg="bg.subtle" rounded="2xl" p={{ base: 6, md: 10 }} textAlign="center">
        <Image
          src={LogoDesa}
          boxSize={{ base: '160px', md: '220px' }}
          objectFit="contain"
          mx="auto"
          alt="Logo Pemerintah Desa Watukarung"
          loading="lazy"
        />
      </Box>

      <Heading as="h3" fontSize={{ base: '18px', md: '20px' }}>
        Makna Lambang
      </Heading>

      <Stack spacing={4}>
        {MAKNA_LAMBANG.map(({ judul, deskripsi }) => (
          <Box key={judul}>
            <Text fontSize="16px" fontWeight={600} color="text.primary">
              {judul}
            </Text>
            <Text fontSize="15px" lineHeight={1.7} color="text.secondary" mt={1}>
              {deskripsi}
            </Text>
          </Box>
        ))}
      </Stack>

      <Heading as="h3" fontSize={{ base: '18px', md: '20px' }}>
        Makna Warna
      </Heading>

      <Stack spacing={4}>
        {MAKNA_WARNA.map(({ judul, swatch, deskripsi }) => (
          <Flex key={judul} gap={3} align="flex-start">
            <Box boxSize="16px" rounded="full" bg={swatch} flexShrink={0} mt="4px" />
            <Box>
              <Text fontSize="16px" fontWeight={600} color="text.primary">
                {judul}
              </Text>
              <Text fontSize="15px" lineHeight={1.7} color="text.secondary" mt={1}>
                {deskripsi}
              </Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default LogoKabupaten;
