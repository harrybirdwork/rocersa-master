// Returns product data from given productCode

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const Code = getRouterParam(event, 'Code');
  const panel = await prisma.panelsT.findMany({
    where: { ProductCode: Code },
  });
  const kitprod = await prisma.kitsetProductT.findMany({
    where: { ProductCode: Code },
  });
  const product = await prisma.productsT.findMany({
    where: { ProductCode: Code },
  });
  const prod = [...kitprod, ...panel, ...product];
  return prod[0];
});
