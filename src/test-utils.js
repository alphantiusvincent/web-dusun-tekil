import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';

const AllProviders = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </HelmetProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
