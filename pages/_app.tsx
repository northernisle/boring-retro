import React from 'react';
import Head from 'next/head';
import { ChakraProvider, Container } from '@chakra-ui/react';

import theme from 'theme';

import type { AppProps } from 'next/app';

import 'styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent h='100%' maxW='container.xl'>
        <Head>
          <title>Boring Retro</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
};

export default React.memo(App);
