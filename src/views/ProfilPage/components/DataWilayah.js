import React from 'react';
import { AspectRatio, Box, Grid, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3588.9464305849383!2d110.98484257500944!3d-8.215884191816519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInNTcuMiJTIDExMMKwNTknMTQuNyJF!5e1!3m2!1sid!2sid!4v1784437238456!5m2!1sid!2sid';

// Data administratif tingkat DUSUN (penduduk 133 jiwa = hasil Sensus 2025
// khusus Dusun Tekil, bukan total Desa Watukarung).
const DATA_DUSUN = [
  { label: 'Nama Resmi', value: 'Dusun Tekil' },
  { label: 'Desa', value: 'Watukarung' },
  { label: 'Kecamatan', value: 'Pringkuku' },
  { label: 'Kabupaten', value: 'Pacitan' },
  { label: 'Provinsi', value: 'Jawa Timur' },
  { label: 'Penduduk', value: '133 jiwa — Sensus 2025' },
];

const BATAS_DUSUN = [

  { arah: 'Utara', wilayah: 'Dusun Dokgarut' },
  { arah: 'Selatan', wilayah: 'Samudera Hindia' },
  { arah: 'Barat', wilayah: 'Dusun Karangnongko' },
  { arah: 'Timur', wilayah: 'Desa Jlubang' },

];

const DataWilayah = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h2" fontSize={{ base: '24px', md: '28px' }}>
        Data Wilayah Dusun
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
        {DATA_DUSUN.map(({ label, value }) => (
          <Box
            key={label}
            bg="bg.surface"
            border="1px solid"
            borderColor="border.default"
            rounded="xl"
            p={4}
          >
            <Text
              fontSize="12px"
              fontWeight={600}
              textTransform="uppercase"
              letterSpacing="0.06em"
              color="text.muted"
              mb={1}
            >
              {label}
            </Text>
            <Text fontSize="16px" fontWeight={600} color="text.primary">
              {value}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Heading as="h3" fontSize={{ base: '18px', md: '20px' }}>
        Batas Wilayah Dusun
      </Heading>

      <Box border="1px solid" borderColor="border.default" rounded="xl" overflow="hidden">
        {BATAS_DUSUN.map(({ arah, wilayah }, i) => (
          <Grid
            key={arah}
            templateColumns={{ base: '130px 1fr', md: '170px 1fr' }}
            px={4}
            py={3}
            gap={3}
            borderBottom={i < BATAS_DUSUN.length - 1 ? '1px solid' : 'none'}
            borderColor="border.default"
          >
            <Text fontSize="15px" fontWeight={600} color="text.primary">
              {arah}
            </Text>
            <Text fontSize="15px" color="text.secondary">
              {wilayah}
            </Text>
          </Grid>
        ))}
      </Box>

      <AspectRatio
        ratio={16 / 10}
        rounded="xl"
        overflow="hidden"
        border="1px solid"
        borderColor="border.default"
      >
        <iframe
          src={MAPS_EMBED_SRC}
          title="Peta lokasi Balai Dusun Tekil"
          loading="lazy"
        />
      </AspectRatio>
    </Stack>
  );
};

export default DataWilayah;
