import ky from 'ky';
import React from 'react';
import { Input, FormHelperText, SlideFade } from '@chakra-ui/react';

import { useDebounceInput } from 'hooks';

interface RoomNameProps {
  name: string;
  setName: (v: string) => void;
  slug: string;
  setSlug: (v: string) => void;
}

const RoomName = React.forwardRef<HTMLInputElement, RoomNameProps>(
  ({ name, setName, slug, setSlug }, ref) => {
    const onChange = useDebounceInput();

    const generateSlug = async (value: string) => {
      if (!value) {
        return setSlug('');
      }

      const data = await ky
        .post('/api/room/slug', { json: { name: value } })
        .text();

      setSlug(data);
    };

    return (
      <>
        <Input
          variant='filled'
          placeholder='Room name'
          ref={ref}
          value={name}
          onChange={onChange(setName, generateSlug)}
        />
        <SlideFade in={!!name && !!slug}>
          <FormHelperText>Project name: {slug}</FormHelperText>
        </SlideFade>
      </>
    );
  }
);

export default RoomName;
