import { HStack, Divider, Text } from '@chakra-ui/react';

interface TextDividerProps {
  my?: number;
  fontSize?: string;
  text: string;
}

const TextDivider = ({ my = 2, fontSize, text }: TextDividerProps) => {
  return (
    <HStack my={my} w='100%'>
      <Divider />
      <Text fontSize={fontSize}>{text}</Text>
      <Divider />
    </HStack>
  );
};

export default TextDivider;
