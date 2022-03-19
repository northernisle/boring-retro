import { useState, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

import { Collapse } from 'components';
import { RoomName, LifespanInput } from 'modals/components';
import { useCreateRoom } from 'hooks';

interface CreateRoomProps {
  onClose: () => void;
}

const CreateRoom = ({ onClose }: CreateRoomProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [lifespan, setLifespan] = useState(2);
  const { createRoom, loading } = useCreateRoom();

  return (
    <Modal isCentered isOpen onClose={onClose} initialFocusRef={inputRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <RoomName
              ref={inputRef}
              name={name}
              setName={setName}
              slug={slug}
              setSlug={setSlug}
            />
            <Collapse mt={3} title='Advanced settings'>
              <LifespanInput lifespan={lifespan} setLifespan={setLifespan} />
            </Collapse>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant='ghost' onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={loading} onClick={createRoom(name, false)}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRoom;
