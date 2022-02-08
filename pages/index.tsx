import { Center, Button, Input, Fade } from '@chakra-ui/react';

import { TextDivider } from 'components';

const Home = () => {
  return (
    <Center as={Fade} in flexGrow={1} minHeight={300} flexDir='column'>
      <Button size='xl'>Create a room</Button>
      <TextDivider my={4} fontSize='xl' text='or' />
      <Input size='xl' variant='filled' placeholder='Join an existing room' />
    </Center>
  );
};

export default Home;
