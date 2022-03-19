import {
  Center,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Fade,
  useDisclosure,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

import { TextDivider } from 'components';
import { CreateRoom } from 'modals';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center as={Fade} in flexGrow={1} minHeight={300} flexDir='column'>
      <Button size='xl' onClick={onOpen}>
        Create a room
      </Button>
      <TextDivider my={4} fontSize='xl' text='or' />
      <InputGroup size='xl'>
        <Input variant='filled' placeholder='Join an existing room' />
        <InputRightElement>
          <LinkIcon fontSize='lg' />
        </InputRightElement>
      </InputGroup>

      {isOpen && <CreateRoom onClose={onClose} />}
    </Center>
  );
};

export default Home;
