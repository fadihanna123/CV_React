import { prisma } from 'db';

export const logsRemover = async () => {
  await prisma.logs.deleteMany();
  await prisma.errors.deleteMany();
};
