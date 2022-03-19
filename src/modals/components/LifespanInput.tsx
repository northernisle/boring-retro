import {
  HStack,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tooltip,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

interface LifespanInputProps {
  lifespan: number;
  setLifespan: (v: number) => void;
}

const LifespanInput = ({ lifespan, setLifespan }: LifespanInputProps) => {
  return (
    <HStack mt={3}>
      <Text>Sprint duration:</Text>
      <NumberInput
        maxW={16}
        defaultValue={2}
        min={1}
        max={8}
        onChange={(value) => setLifespan(+value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>{lifespan === 1 ? 'week' : 'weeks'}</Text>
      <Tooltip label='The room will be auto-deleted if it remains inactive for longer than the specified period.'>
        <QuestionOutlineIcon />
      </Tooltip>
    </HStack>
  );
};

export default LifespanInput;
