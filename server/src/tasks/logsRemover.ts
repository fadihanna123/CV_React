import { fileCleaner } from './fileClenaer';
import { prisma } from 'db';

/**
 * Clean error and logs data in database and call fileCleaner.
 */

export const logsRemover = async () => {
  await prisma.logs.deleteMany();
  await prisma.errors.deleteMany();
  fileCleaner();
};