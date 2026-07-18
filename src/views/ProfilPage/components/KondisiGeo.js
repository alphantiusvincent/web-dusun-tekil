import React from 'react';
import { Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

const BATAS_DESA = [
  'Sebelah Utara: Desa Dersono',
  'Sebelah Selatan: Dusun Karangnongko',
  'Sebelah Barat: Desa Dersono',
  'Sebelah Timur: Desa Jlubang',
];

const KondisiGeo = () => {
  return (
    <Stack spacing={5} maxW="68ch">
      <Heading as="h2" fontSize={{ base: '24px', md: '28px' }}>
        Kondisi Geografis Desa Watukarung
      </Heading>

      <Text fontSize="14px" color="text.muted" fontStyle="italic">
        Data berikut adalah gambaran Desa Watukarung secara keseluruhan — desa induk dari Dusun
        Tekil (monografi desa 2016).
      </Text>

      <Text fontSize="17px" lineHeight={1.75} color="text.secondary">
        Desa Watukarung, Kecamatan Pringkuku, memiliki luas wilayah ±582,60 hektare dengan
        batas-batas wilayah sebagai berikut:
      </Text>

      <UnorderedList spacing={2} pl={5}>
        {BATAS_DESA.map(batas => (
          <ListItem key={batas} fontSize="17px" lineHeight={1.75} color="text.secondary">
            {batas}
          </ListItem>
        ))}
      </UnorderedList>

      <Text fontSize="17px" lineHeight={1.75} color="text.secondary">
        Secara geografis, Desa Watukarung berada pada ketinggian sekitar 160 meter di atas
        permukaan laut dan berjarak sekitar 25 km dari pusat Kabupaten Pacitan.
      </Text>

      <Text fontSize="17px" lineHeight={1.75} color="text.secondary">
        Berdasarkan data monografi desa tahun 2016, penduduk Desa Watukarung terdiri dari 553
        kepala keluarga dengan total 1.596 jiwa — 785 jiwa laki-laki dan 811 jiwa perempuan.
        Jumlah penduduk perempuan sedikit lebih banyak dibandingkan laki-laki, dengan selisih
        26 jiwa.
      </Text>

      <Text fontSize="17px" lineHeight={1.75} color="text.secondary">
        Mayoritas penduduk Desa Watukarung memeluk agama Islam dengan persentase 99,94%,
        sementara penganut agama Kristen sangat jarang dijumpai.
      </Text>
    </Stack>
  );
};

export default KondisiGeo;
