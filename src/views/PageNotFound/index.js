import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Flex
      minH="70vh"
      direction="column"
      justify="center"
      align="center"
      textAlign="center"
      px={5}
    >
      <Helmet>
        <title>Halaman tidak ditemukan — Dusun Dokgarut</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Text
        as="span"
        fontFamily="heading"
        fontSize={{ base: '96px', md: '128px' }}
        fontWeight={800}
        lineHeight={1}
        color="brand.100"
        _dark={{ color: 'bg.subtle' }}
        userSelect="none"
        aria-hidden="true"
      >
        404
      </Text>

      <Heading as="h1" mt={{ base: -6, md: -8 }} fontSize={{ base: '24px', md: '28px' }}>
        Halaman tidak ditemukan
      </Heading>

      <Text mt={3} color="text.secondary" maxW="420px" fontSize="16px">
        Halaman ini tersapu ombak — mungkin alamatnya berubah atau sudah tidak
        ada.
      </Text>

      <Button as={RouterLink} to="/" variant="solid" mt={6}>
        Kembali ke Beranda
      </Button>
    </Flex>
  );
}
