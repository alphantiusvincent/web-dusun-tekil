import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaUserFriends } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logoDesa from '../assets/logo_watukarung-removebg-preview.png';

const MOBILE_MENU_ID = 'menu-navigasi-mobile';
const ACTIVE_UNDERLINE = 'inset 0 -2px 0 0 var(--chakra-colors-border-active)';

// Sub-navigasi dropdown Profil — ScrollManager menangani scroll ke hash.
const PROFIL_SUBNAV = [
  { label: 'Data Wilayah', to: '/profil#datawilayah' },
  { label: 'Visi Misi', to: '/profil#visimisi' },
  { label: 'Logo Desa', to: '/profil#logodesa' },
  { label: 'Kondisi Geografis', to: '/profil#kondisigeografis' },
];

const NAV_ITEMS = [
  { label: 'Beranda', to: '/', isActive: pathname => pathname === '/' },
  {
    label: 'Profil',
    to: '/profil',
    isActive: pathname => pathname.startsWith('/profil'),
    children: PROFIL_SUBNAV,
  },
  { label: 'Wisata', to: '/#wisata', isActive: () => false },
  { label: 'Berita', to: '/news', isActive: pathname => pathname.startsWith('/news') },
  { label: 'Pemetaan', to: '/pemetaan', isActive: pathname => pathname.startsWith('/pemetaan') },
];

const DesktopNavLink = ({ to, active, children }) => (
  <Link
    as={RouterLink}
    to={to}
    px={3}
    py={2}
    fontSize="15px"
    fontWeight={500}
    color={active ? 'text.link' : 'text.secondary'}
    boxShadow={active ? ACTIVE_UNDERLINE : 'none'}
    _hover={{ color: 'text.link' }}
    transition="color 0.2s ease"
  >
    {children}
  </Link>
);

const ProfilMenu = ({ active }) => (
  <Menu autoSelect={false}>
    <MenuButton
      as={Button}
      variant="ghost"
      rightIcon={<ChevronDownIcon />}
      h="40px"
      px={3}
      fontSize="15px"
      fontWeight={500}
      rounded="md"
      color={active ? 'text.link' : 'text.secondary'}
      boxShadow={active ? ACTIVE_UNDERLINE : 'none'}
      _hover={{ color: 'text.link' }}
    >
      Profil
    </MenuButton>
    <MenuList
      bg="bg.surface"
      border="1px solid"
      borderColor="border.default"
      rounded="xl"
      shadow="raised"
      py={2}
      minW="220px"
    >
      <MenuItem
        as={RouterLink}
        to="/profil"
        bg="transparent"
        fontSize="15px"
        fontWeight={600}
        color="text.primary"
        _hover={{ bg: 'bg.subtle' }}
        _focus={{ bg: 'bg.subtle' }}
      >
        Profil Lengkap
      </MenuItem>
      <MenuDivider borderColor="border.default" />
      {PROFIL_SUBNAV.map(item => (
        <MenuItem
          key={item.to}
          as={RouterLink}
          to={item.to}
          bg="transparent"
          fontSize="15px"
          color="text.secondary"
          _hover={{ bg: 'bg.subtle', color: 'text.link' }}
          _focus={{ bg: 'bg.subtle', color: 'text.link' }}
        >
          {item.label}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

const MobileNavLink = ({ to, active, onClick, children, ...rest }) => (
  <Link
    as={RouterLink}
    to={to}
    onClick={onClick}
    display="block"
    py={3}
    fontSize="15px"
    fontWeight={500}
    color={active ? 'text.link' : 'text.secondary'}
    _hover={{ color: 'text.link' }}
    {...rest}
  >
    {children}
  </Link>
);

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { pathname, hash } = useLocation();

  // Tutup menu mobile saat lokasi berubah (termasuk Back/Forward browser).
  useEffect(() => {
    onClose();
  }, [pathname, hash, onClose]);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="rgba(255,255,255,0.86)"
      _dark={{ bg: 'rgba(11,18,32,0.86)' }}
      backdropFilter="blur(12px)"
      sx={{ WebkitBackdropFilter: 'blur(12px)' }}
      borderBottom="1px solid"
      borderColor="border.default"
    >
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <Flex h={{ base: '64px', md: '72px' }} align="center" justify="space-between" gap={4}>
          {/* Logo + wordmark */}
          <Link
            as={RouterLink}
            to="/"
            display="flex"
            alignItems="center"
            gap={3}
            flexShrink={0}
            onClick={onClose}
          >
            <Image src={logoDesa} alt="" boxSize="36px" objectFit="contain" />
            <Box lineHeight={1.25}>
              <Text fontSize="16px" fontWeight={700} color="text.primary">
                Dusun Tekil
              </Text>
              <Text fontSize="11px" color="text.muted" display={{ base: 'none', md: 'block' }}>
                Desa Watukarung · Pacitan
              </Text>
            </Box>
          </Link>

          {/* Navigasi desktop */}
          <Box as="nav" aria-label="Navigasi utama" display={{ base: 'none', md: 'block' }}>
            <HStack spacing={{ md: 0, lg: 1 }}>
              {NAV_ITEMS.map(item =>
                item.children ? (
                  <ProfilMenu key={item.label} active={item.isActive(pathname)} />
                ) : (
                  <DesktopNavLink key={item.label} to={item.to} active={item.isActive(pathname)}>
                    {item.label}
                  </DesktopNavLink>
                )
              )}
            </HStack>
          </Box>

          {/* Aksi kanan */}
          <HStack spacing={1}>
            <Tooltip label="Tim KKN 30 UKDW" rounded="md" fontSize="13px">
              <IconButton
                as={RouterLink}
                to="/tim"
                variant="ghost"
                aria-label="Tim KKN 34 UKDW"
                fontSize="lg"
                color={pathname.startsWith('/tim') ? 'text.link' : 'current'}
                icon={<FaUserFriends />}
              />
            </Tooltip>
            <ColorModeSwitcher />
            <IconButton
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onToggle}
              variant="ghost"
              aria-label="Buka menu navigasi"
              aria-expanded={isOpen}
              aria-controls={MOBILE_MENU_ID}
              icon={isOpen ? <CloseIcon w={3.5} h={3.5} /> : <HamburgerIcon w={5} h={5} />}
            />
          </HStack>
        </Flex>
      </Container>

      {/* Menu mobile */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          as="nav"
          id={MOBILE_MENU_ID}
          aria-label="Navigasi utama"
          display={{ md: 'none' }}
          px={5}
          pb={4}
          borderTop="1px solid"
          borderColor="border.default"
        >
          <Stack spacing={0} divider={<StackDivider borderColor="border.default" />}>
            {NAV_ITEMS.map(item =>
              item.children ? (
                <Box key={item.label}>
                  <MobileNavLink to={item.to} active={item.isActive(pathname)} onClick={onClose}>
                    {item.label}
                  </MobileNavLink>
                  <Stack
                    spacing={0}
                    pl={4}
                    mb={2}
                    borderLeft="2px solid"
                    borderColor="border.default"
                  >
                    {item.children.map(child => (
                      <MobileNavLink
                        key={child.to}
                        to={child.to}
                        active={false}
                        onClick={onClose}
                        py={2}
                        fontSize="14px"
                        fontWeight={400}
                      >
                        {child.label}
                      </MobileNavLink>
                    ))}
                  </Stack>
                </Box>
              ) : (
                <MobileNavLink
                  key={item.label}
                  to={item.to}
                  active={item.isActive(pathname)}
                  onClick={onClose}
                >
                  {item.label}
                </MobileNavLink>
              )
            )}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Navbar;
