import { extendTheme } from '@chakra-ui/react';

import components from 'theme/components';

const semanticTokens = {
  colors: {
    primary: {
      default: '#131722',
      _light: 'white',
    },
    secondary: {
      default: 'gray.800',
      _light: 'gray.100',
    },
    accent: '#B57BA6',
  },
};

const theme = extendTheme({
  components,
  semanticTokens,
  styles: {
    global: {
      html: {
        '--chakra-ui-focus-ring-color': semanticTokens.colors.accent,
      },
      body: {
        backgroundColor: 'primary',
      },
    },
  },
  shadows: {
    outline: '0 0 0 3px var(--chakra-ui-focus-ring-color)',
  },
  fonts: {
    heading: "'Rubik', sans-serif",
  },
  config: {
    initialColorMode: 'dark',
  },
});

export default theme;
