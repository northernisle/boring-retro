import { PrismaClient } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const UUIDRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.end();
  }

  const identifier = req.query.id as string;
  const isUUID = UUIDRegex.test(identifier);
  const queryKey = isUUID ? 'id' : 'slug';

  const room = await prisma.room.findUnique({
    where: {
      [queryKey]: identifier,
    },
  });

  res.json(room);
};
