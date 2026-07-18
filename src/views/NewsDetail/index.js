import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, Link as RouterLink, useParams } from 'react-router-dom';
import {
  AspectRatio,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { LinkIcon } from '@chakra-ui/icons';
import Reveal from '../../components/Reveal';
import CardNews from '../../components/CardNews';
import { allNews, newsCategories } from '../../variables/general';
import newsArticles from '../../variables/newsArticles';

// Estimasi lama baca dari jumlah kata isi artikel (~200 kata/menit).
const readingTime = blocks => {
  const words = blocks
    .map(b => (b.type === 'list' ? b.items.join(' ') : b.text))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

// Render satu blok artikel sesuai tipenya (lihat newsArticles.js).
const ArticleBlock = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return (
        <Heading as="h2" fontSize={{ base: '20px', md: '22px' }} lineHeight={1.4} pt={4}>
          {block.text}
        </Heading>
      );
    case 'quote':
      return (
        <Box
          as="blockquote"
          bg="brand.50"
          _dark={{ bg: 'bg.subtle' }}
          borderLeft="4px solid"
          borderLeftColor="accent.500"
          rounded="lg"
          px={{ base: 5, md: 6 }}
          py={5}
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: '17px', md: '18px' }}
            fontWeight={600}
            lineHeight={1.6}
          >
            “{block.text}”
          </Text>
          {block.cite && (
            <Text fontSize="14px" color="text.muted" mt={2}>
              — {block.cite}
            </Text>
          )}
        </Box>
      );
    case 'list':
      return (
        <UnorderedList spacing={2} pl={1} m={0} styleType="disc" stylePosition="outside">
          {block.items.map(item => (
            <ListItem
              key={item}
              ml={5}
              fontSize={{ base: '16px', md: '17px' }}
              lineHeight={1.75}
              color="text.primary"
            >
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      );
    default:
      return (
        <Text fontSize={{ base: '16px', md: '17px' }} lineHeight={1.8} color="text.primary">
          {block.text}
        </Text>
      );
  }
};

// Kartu kecil navigasi antar-artikel (lebih baru / lebih lama).
const AdjacentLink = ({ item, label, align = 'start' }) => (
  <Flex
    as={RouterLink}
    to={`/news/${item.id}`}
    direction="column"
    align={align}
    bg="bg.surface"
    border="1px solid"
    borderColor="border.default"
    rounded="xl"
    p={4}
    transition="all 0.2s ease"
    _hover={{ borderColor: 'border.hover', shadow: 'lift', transform: 'translateY(-2px)' }}
  >
    <Text
      fontSize="12px"
      fontWeight={600}
      textTransform="uppercase"
      letterSpacing="0.06em"
      color="text.muted"
    >
      {label}
    </Text>
    <Text
      fontSize="15px"
      fontWeight={600}
      noOfLines={2}
      mt={2}
      textAlign={align === 'end' ? 'right' : 'left'}
    >
      {item.title}
    </Text>
  </Flex>
);

export default function NewsDetail() {
  const { newsId } = useParams();
  const toast = useToast();

  const index = allNews.findIndex(item => item.id === newsId);
  if (index === -1) {
    return <Navigate to="/news" replace />;
  }

  const item = allNews[index];
  const blocks = newsArticles[item.id] || [];
  const categoryLabel =
    newsCategories.find(c => c.key === item.category)?.label || item.category;

  const newer = index > 0 ? allNews[index - 1] : null;
  const older = index < allNews.length - 1 ? allNews[index + 1] : null;

  // Berita terkait: kategori sama lebih dulu, sisanya diisi berita terbaru lain.
  const others = allNews.filter(n => n.id !== item.id);
  const related = [
    ...others.filter(n => n.category === item.category),
    ...others.filter(n => n.category !== item.category),
  ].slice(0, 3);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`${item.title} — Dusun Dokgarut\n${pageUrl}`);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      toast({
        title: 'Tautan disalin',
        status: 'success',
        duration: 2000,
        position: 'bottom',
      });
    } catch {
      toast({
        title: 'Gagal menyalin tautan',
        status: 'error',
        duration: 2000,
        position: 'bottom',
      });
    }
  };

  return (
    <Box>
      <Helmet>
        <title>{`${item.title} — Dusun Dokgarut`}</title>
        <meta name="description" content={item.caption} />
      </Helmet>

      {/* Band header artikel — pb ekstra memberi ruang foto yang menimpa band */}
      <Box bg="bg.subtle" borderBottom="1px solid" borderColor="border.default" pt={{ base: 10, md: 14 }} pb={{ base: 20, md: 28 }}>
        <Container maxW="3xl" px={{ base: 5, md: 8 }}>
          <Breadcrumb fontSize="13px" color="text.muted" mb={4} separator="/">
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/" color="text.link">
                Beranda
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/news" color="text.link">
                Berita
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as="span" cursor="default" noOfLines={1}>
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex align="center" gap={3} wrap="wrap">
            <Badge variant={item.category}>{categoryLabel}</Badge>
            <Text fontSize="13px" color="text.muted">
              {item.date} · {readingTime(blocks)} menit baca
            </Text>
          </Flex>

          <Heading as="h1" fontSize={{ base: '28px', md: '38px' }} lineHeight={1.2} mt={4}>
            {item.title}
          </Heading>

          <Text mt={4} fontSize={{ base: '16px', md: '18px' }} lineHeight={1.65} color="text.secondary">
            {item.caption}
          </Text>
        </Container>
      </Box>

      {/* Foto utama menimpa tepi band header — pola overlap khas situs ini */}
      <Container maxW="4xl" px={{ base: 5, md: 8 }} mt={{ base: '-56px', md: '-80px' }}>
        <Reveal>
          <AspectRatio
            ratio={16 / 9}
            rounded="2xl"
            overflow="hidden"
            shadow="raised"
            border="1px solid"
            borderColor="border.default"
          >
            <Image src={item.image} alt={item.title} objectFit="cover" />
          </AspectRatio>
        </Reveal>
      </Container>

      {/* Isi artikel */}
      <Container maxW="3xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 14 }}>
        <Stack as="article" spacing={5}>
          {blocks.map((block, i) => (
            <ArticleBlock key={i} block={block} />
          ))}
        </Stack>

        <Divider my={{ base: 8, md: 10 }} borderColor="border.default" />

        {/* Bagikan */}
        <Flex align="center" gap={3} wrap="wrap">
          <Text fontSize="14px" fontWeight={600} color="text.secondary" mr={1}>
            Bagikan artikel ini
          </Text>
          <Button
            as="a"
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="outline"
            leftIcon={<FaWhatsapp />}
          >
            WhatsApp
          </Button>
          <Button
            as="a"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="outline"
            leftIcon={<FaFacebookF />}
          >
            Facebook
          </Button>
          <Button size="sm" variant="outline" leftIcon={<LinkIcon />} onClick={copyLink}>
            Salin Tautan
          </Button>
        </Flex>

        {/* Navigasi antar-artikel */}
        {(newer || older) && (
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mt={{ base: 8, md: 10 }}>
            {newer ? <AdjacentLink item={newer} label="← Lebih baru" /> : <Box />}
            {older && <AdjacentLink item={older} label="Lebih lama →" align="end" />}
          </SimpleGrid>
        )}
      </Container>

      {/* Berita lainnya */}
      {related.length > 0 && (
        <Box bg="bg.surface" borderTop="1px solid" borderColor="border.default">
          <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 14, md: 20 }}>
            <Reveal>
              <Flex align="baseline" justify="space-between" gap={4} mb={8}>
                <Heading as="h2" fontSize={{ base: '22px', md: '26px' }}>
                  Berita Lainnya
                </Heading>
                <Box
                  as={RouterLink}
                  to="/news"
                  color="text.link"
                  fontWeight={600}
                  fontSize="15px"
                  flexShrink={0}
                >
                  Lihat semua →
                </Box>
              </Flex>
            </Reveal>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {related.map((n, i) => (
                <Reveal key={n.id} delay={i * 0.08}>
                  <CardNews {...n} />
                </Reveal>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      )}
    </Box>
  );
}
