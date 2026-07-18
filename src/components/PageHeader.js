import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Band header halaman dalam (/news, /profil, /pemetaan) + judul dokumen.
const PageHeader = ({ kicker, title, description, breadcrumb = [], htmlTitle }) => {
  return (
    <Box bg="bg.subtle" borderBottom="1px solid" borderColor="border.default" py={{ base: 10, md: 14 }}>
      <Helmet>
        <title>{htmlTitle || `${title} — Dusun Dokgarut`}</title>
      </Helmet>
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        {breadcrumb.length > 0 && (
          <Breadcrumb fontSize="13px" color="text.muted" mb={4} separator="/">
            {breadcrumb.map((item, i) => (
              <BreadcrumbItem key={item.label} isCurrentPage={i === breadcrumb.length - 1}>
                {item.to ? (
                  <BreadcrumbLink as={RouterLink} to={item.to} color="text.link">
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink as="span" cursor="default">
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
        {kicker && (
          <Text
            fontSize="12px"
            fontWeight={600}
            textTransform="uppercase"
            letterSpacing="0.08em"
            color="text.link"
            mb={2}
          >
            {kicker}
          </Text>
        )}
        <Heading as="h1" fontSize={{ base: '32px', md: '40px' }} lineHeight={1.1}>
          {title}
        </Heading>
        {description && (
          <Text mt={3} fontSize={{ base: '16px', md: '17px' }} color="text.secondary" maxW="640px">
            {description}
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default PageHeader;
