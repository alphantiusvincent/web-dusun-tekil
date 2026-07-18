import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import petaWeb from './images/peta-web.png';

function Pemetaan() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <PageHeader
        kicker="WILAYAH"
        title="Peta Wilayah Dusun Tekil"
        htmlTitle="Pemetaan — Dusun Tekil"
        description="Peta administratif Dusun Tekil dan sekitarnya di Desa Watukarung."
        breadcrumb={[{ label: 'Beranda', to: '/' }, { label: 'Pemetaan' }]}
      />

      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
        <Reveal>
          <Box
            bg="bg.surface"
            border="1px solid"
            borderColor="border.default"
            rounded="2xl"
            p={{ base: 2, md: 3 }}
          >
            <Box
              as="button"
              type="button"
              onClick={onOpen}
              aria-label="Perbesar peta wilayah Dusun Tekil"
              display="block"
              w="full"
              cursor="zoom-in"
              rounded="xl"
            >
              <Image
                src={petaWeb}
                alt="Peta wilayah Dusun Tekil, Desa Watukarung"
                loading="lazy"
                rounded="xl"
                w="full"
              />
            </Box>
          </Box>

          <Flex
            justify="space-between"
            align="center"
            mt={4}
            wrap="wrap"
            gap={3}
          >
            <Text fontSize="13px" color="text.muted">
              Klik peta untuk memperbesar.
            </Text>
            <Button
              as={Link}
              href={petaWeb}
              isExternal
              variant="outline"
              size="sm"
            >
              Buka ukuran penuh
            </Button>
          </Flex>
        </Reveal>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent
          aria-label="Peta wilayah Dusun Tekil (diperbesar)"
          bg="blackAlpha.800"
          shadow="none"
          justifyContent="center"
        >
          <ModalCloseButton color="white" />
          <Image
            src={petaWeb}
            alt="Peta wilayah Dusun Tekil Desa Watukarung"
            maxH="94vh"
            objectFit="contain"
            mx="auto"
            px={{ base: 2, md: 8 }}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Pemetaan;
