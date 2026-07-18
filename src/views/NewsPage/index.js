import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import CardNews from '../../components/CardNews';
import SmallCardNews from '../../components/SmallCardNews';
import { allNews, newsCategories } from '../../variables/general';

const filterOptions = [{ key: 'semua', label: 'Semua' }, ...newsCategories];

export default function NewsPage() {
  const [category, setCategory] = useState('semua');

  const filtered =
    category === 'semua' ? allNews : allNews.filter(item => item.category === category);

  return (
    <Box>
      <PageHeader
        kicker="KABAR DUSUN"
        title="Berita Dusun"
        htmlTitle="Berita — Dusun Dokgarut"
        description="Kabar kegiatan pemerintahan, pendidikan, dan kesehatan di Dusun Dokgarut."
        breadcrumb={[{ label: 'Beranda', to: '/' }, { label: 'Berita' }]}
      />

      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
        <Flex flexWrap="wrap" gap={2} mb={{ base: 8, md: 10 }}>
          {filterOptions.map(option => {
            const isActive = category === option.key;
            return (
              <Button
                key={option.key}
                size="sm"
                rounded="full"
                variant={isActive ? 'solid' : 'outline'}
                aria-pressed={isActive}
                onClick={() => setCategory(option.key)}
              >
                {option.label}
              </Button>
            );
          })}
        </Flex>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={10}>
          <Box>
            <Heading as="h2" m={0}>
              <VisuallyHidden>Daftar Berita</VisuallyHidden>
            </Heading>
            {filtered.length === 0 ? (
              <Text color="text.secondary">Belum ada berita di kategori ini.</Text>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                {filtered.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 2) * 0.06}>
                    <CardNews
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      date={item.date}
                      caption={item.caption}
                      category={item.category}
                    />
                  </Reveal>
                ))}
              </SimpleGrid>
            )}
          </Box>

          <Box as="aside" alignSelf="start" position="sticky" top="96px">
            <Heading as="h2" fontSize="18px" mb={4}>
              Terbaru
            </Heading>
            <Stack divider={<StackDivider borderColor="border.default" />}>
              {allNews.slice(0, 5).map(item => (
                <SmallCardNews
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  category={item.category}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
