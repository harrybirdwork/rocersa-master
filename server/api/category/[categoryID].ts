// Returns all products matching the passed categoryID

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const catID = parseInt(getRouterParam(event, 'categoryID'));
  const kitprods = await prisma.kitsetProductT.findMany({
    where: { CategoryID: catID },
  });
  const panels = await prisma.panelsT.findMany({
    where: { CategoryID: catID },
  });
  const products = await prisma.kitsetProductT.findMany({
    where: { CategoryID: catID },
  });
  const prods = [...kitprods, ...panels, ...products];
  return prods;
});
