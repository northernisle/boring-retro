import ky from 'ky';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import type { Room } from 'types';

const useCreateRoom = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const createRoom = useCallback(
    (name: string, createSlug: boolean) => async () => {
      setLoading(true);
      const room = await ky
        .post('/api/room', { json: { name, createSlug } })
        .json<Room>()
        .catch(() => {
          setLoading(false);
          toast({
            status: 'error',
            title: 'Something went wrong while creating the room',
            position: 'bottom',
          });
        });

      if (room) {
        router.push(room.slug ?? room.id);
      }
    },
    [router, toast]
  );

  return { createRoom, loading };
};

export default useCreateRoom;
