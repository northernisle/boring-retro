import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: '#131722',
        _light: 'white',
      },
      secondary: {
        default: 'gray.800',
        _light: 'gray.100',
      },
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'primary',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});

export default theme;
