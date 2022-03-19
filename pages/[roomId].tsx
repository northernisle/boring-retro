import ky from 'ky';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import { Room } from 'types';

const Room = () => {
  const toast = useToast();
  const router = useRouter();
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    const getRoom = async (roomId: string) => {
      const room = await ky
        .get(`/api/room/${roomId}`)
        .json<Room>()
        .catch(() => {
          toast({
            status: 'error',
            title: 'Room not found',
            position: 'bottom-left',
          });
          router.push('/');
        });

      if (room) {
        setRoom(room);
      }
    };

    const { roomId } = router.query;

    if (roomId) {
      getRoom(roomId as string);
    }
  }, [router, toast]);

  return (
    <>
      <p>id: {room?.id}</p>
      <p>name: {room?.name}</p>
      <p>slug: {room?.slug}</p>
    </>
  );
};

export default Room;
