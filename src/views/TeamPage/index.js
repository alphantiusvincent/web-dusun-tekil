import React, { useState } from 'react';
import {
  AspectRatio,
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import { teamMembers, teamUnit } from '../../variables/team';

// Kartu anggota — poster perkenalan 4:5, klik untuk lihat ukuran penuh.
const MemberCard = ({ member, onOpen }) => (
  <Box
    as="button"
    type="button"
    onClick={() => onOpen(member)}
    textAlign="left"
    role="group"
    display="flex"
    flexDirection="column"
    w="100%"
    h="100%"
    bg="bg.surface"
    border="1px solid"
    borderColor="border.default"
    rounded="2xl"
    overflow="hidden"
    transition="all 0.2s ease"
    _hover={{
      transform: 'translateY(-2px)',
      shadow: 'lift',
      borderColor: 'border.hover',
    }}
    _focusVisible={{
      outline: 'none',
      shadow: 'lift',
      borderColor: 'border.active',
    }}
  >
    <AspectRatio ratio={4 / 5} w="100%" flexShrink={0}>
      <Image
        src={member.photo}
        alt={`Poster perkenalan ${member.name}`}
        objectFit="cover"
        loading="lazy"
        transition="transform 0.4s ease"
        _groupHover={{ transform: 'scale(1.03)' }}
      />
    </AspectRatio>
    <Box p={4}>
      <Text fontSize="12px" fontWeight={600} textTransform="uppercase" letterSpacing="0.06em" color="text.link">
        {member.role}
      </Text>
      <Heading as="h3" fontSize="16px" lineHeight={1.4} noOfLines={2} mt={1}>
        {member.name}
      </Heading>
      <Text fontSize="13px" color="text.muted" mt={1}>
        {member.major}
      </Text>
    </Box>
  </Box>
);

export default function TeamPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  const openMember = member => {
    setSelected(member);
    onOpen();
  };

  return (
    <Box>
      <PageHeader
        kicker="DI BALIK SITUS INI"
        title="Tim KKN 30 UKDW"
        htmlTitle="Tim KKN — Dusun Tekil"
        description="Tujuh mahasiswa lintas program studi yang tinggal, belajar, dan berkarya bersama warga Dusun Tekil."
        breadcrumb={[{ label: 'Beranda', to: '/' }, { label: 'Tim KKN' }]}
      />

      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
        <Reveal>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 3, md: 10 }}
            align={{ md: 'end' }}
            justify="space-between"
            mb={{ base: 8, md: 12 }}
          >
            <Box maxW="640px">
              <Text fontSize={{ base: '16px', md: '17px' }} lineHeight={1.75} color="text.secondary">
                Unit <b>30 Tekil</b> adalah bagian dari .<b>KKN Reguler UKDW 2026 </b>
                Selama masa pengabdian, tim ini menjalankan program pendidikan,
                kesehatan, dan pemberdayaan ekonomi bersama warga — termasuk
                membangun situs yang sedang Anda buka ini.
              </Text>
            </Box>
            <Badge
              variant="pemerintahan"
              fontSize="13px"
              px={4}
              py={2}
              flexShrink={0}
              alignSelf={{ base: 'start', md: 'end' }}
            >
              {teamMembers.length} Anggota · 6 Program Studi
            </Badge>
          </Flex>
        </Reveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          {teamMembers.map((member, i) => (
            <Reveal key={member.id} delay={(i % 4) * 0.06} style={{ height: '100%' }}>
              <MemberCard member={member} onOpen={openMember} />
            </Reveal>
          ))}
        </SimpleGrid>

        <Text fontSize="13px" color="text.muted" mt={6}>
          Klik kartu untuk melihat poster perkenalan ukuran penuh.
        </Text>
      </Container>

      {/* Band penutup — tagline tim, navy konstan seperti VideoPromo */}
      <Box bg="brand.900" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl" px={{ base: 5, md: 8 }} textAlign="center">
          <Heading as="p" fontSize={{ base: '22px', md: '28px' }} color="white">
            {teamUnit.tagline}
          </Heading>
          <Text fontSize="15px" color="whiteAlpha.700" mt={3}>
            {teamUnit.program}
          </Text>
        </Container>
      </Box>

      {/* Lightbox poster */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <ModalContent bg="transparent" shadow="none" mx={4}>
          <ModalCloseButton
            color="white"
            bg="blackAlpha.500"
            rounded="full"
            _hover={{ bg: 'blackAlpha.700' }}
            zIndex={1}
          />
          <ModalBody p={0}>
            {selected && (
              <Image
                src={selected.photo}
                alt={`Poster perkenalan ${selected.name}`}
                w="100%"
                rounded="xl"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
