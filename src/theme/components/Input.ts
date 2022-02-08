import { ComponentSingleStyleConfig } from '@chakra-ui/react';

import { getOutlineVariants } from 'theme/helpers';

const Input: ComponentSingleStyleConfig = {
  ...getOutlineVariants(),
  sizes: {
    xl: {
      field: {
        h: 16,
        w: 96,
        paddingX: 4,
        fontSize: 'xl',
        borderRadius: 'md',
      },
    },
  },
};

export default Input;
