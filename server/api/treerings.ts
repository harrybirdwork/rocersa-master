import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const drafts = await prisma.panelsT.findMany({
    where: { CategoryID: 7 },
  });
  return drafts;
});
