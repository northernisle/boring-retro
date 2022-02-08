export const getOutline = (dimensions: string) => ({
  field: {
    _focus: {
      borderColor: 'var(--chakra-ui-focus-ring-color)',
      boxShadow: `${dimensions} var(--chakra-ui-focus-ring-color)`,
    },
  },
});

export const getOutlineVariants = () => ({
  variants: {
    outline: getOutline('0 0 0 2px'),
    filled: getOutline('0 0 0 1px'),
    flushed: getOutline('0 1px 0 0'),
  },
});
