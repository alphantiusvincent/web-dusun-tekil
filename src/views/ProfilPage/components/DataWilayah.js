import React from 'react';
import { AspectRatio, Box, Grid, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8690425272453!2d110.98633542456075!3d-8.215922632445963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdc2d224ce15d%3A0x25c411bc9b209517!2sTekil%2C%20Watukarung%2C%20Kec.%20Pringkuku%2C%20Kabupaten%20Pacitan%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1784115160100!5m2!1sid!2sid';

// Data administratif tingkat DUSUN (penduduk 164 jiwa = hasil Sensus 2025
// khusus Dusun Dokgarut, bukan total Desa Watukarung).
const DATA_DUSUN = [
  { label: 'Nama Resmi', value: 'Dusun Tekil' },
  { label: 'Desa', value: 'Watukarung' },
  { label: 'Kecamatan', value: 'Pringkuku' },
  { label: 'Kabupaten', value: 'Pacitan' },
  { label: 'Provinsi', value: 'Jawa Timur' },
  { label: 'Penduduk', value: '170 jiwa — Sensus 2026' },
];

const BATAS_DUSUN = [

  { arah: 'Utara', wilayah: 'Desa Dersono' },
  { arah: 'Selatan', wilayah: 'Dusun Karangnongko' },
  { arah: 'Barat', wilayah: 'Desa Dersono' },
  { arah: 'Timur', wilayah: 'Desa Jlubang' },
  { arah: 'Tenggara', wilayah: 'Dusun Tekil' }
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
          title="Peta lokasi Dusun Dokgarut"
          loading="lazy"
        />
      </AspectRatio>
    </Stack>
  );
};

export default DataWilayah;
