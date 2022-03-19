import { PrismaClient } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { CreateRoom } from 'types';

const prisma = new PrismaClient();

const generateSlug = (data: string) => {
  return data
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.end();
  }

  const { name, createSlug } = req.body;

  if (!name) {
    return res.status(400).end();
  }

  const room = await prisma.room.create<CreateRoom>({
    data: {
      name,
      slug: createSlug ? generateSlug(name) : undefined,
    },
  });

  res.json(room);
};
