import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

// Pola header section wajib: kicker → judul → deskripsi (+ slot aksi rata kanan).
const SectionHeading = ({ kicker, title, description, action, align = 'start', ...rest }) => {
  const isCenter = align === 'center';

  return (
    <Flex
      mb={{ base: 8, md: 12 }}
      gap={4}
      direction={{ base: 'column', md: 'row' }}
      align={{ base: isCenter ? 'center' : 'flex-start', md: isCenter ? 'center' : 'flex-end' }}
      justify={isCenter ? 'center' : 'space-between'}
      textAlign={isCenter ? 'center' : 'start'}
      {...rest}
    >
      <Box maxW="560px">
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
        <Heading as="h2" fontSize={{ base: '28px', md: '36px' }} lineHeight={1.15}>
          {title}
        </Heading>
        {description && (
          <Text mt={3} fontSize="16px" color="text.secondary">
            {description}
          </Text>
        )}
      </Box>
      {action && <Box flexShrink={0}>{action}</Box>}
    </Flex>
  );
};

export default SectionHeading;
