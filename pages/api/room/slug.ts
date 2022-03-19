import slugify from 'slugify';
import { PrismaClient } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const generateSlug = (data: string, withId?: boolean) => {
  let slug = slugify(data).toLowerCase();

  if (withId) {
    slug += `-${generateId()}`;
  }

  return slug;
};

const generateId = () => (Math.random() + 1).toString(36).substring(7);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.end();
  }

  const { name } = req.body;

  if (!name) {
    return res.end();
  }

  let slug = '';
  let count = 0;

  do {
    slug = generateSlug(name, !!count);

    count = await prisma.room.count({
      where: {
        slug,
      },
    });
  } while (count !== 0);

  return res.send(slug);
};
