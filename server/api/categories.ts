import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const drafts = await prisma.categoryT.findMany({
    where: { Group: 'Corten' },
  });
  return drafts;
});
