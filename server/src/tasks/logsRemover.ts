import { prisma } from 'db';

import { fileCleaner } from './fileClenaer';

/**
 * Clean error and logs data in database and call fileCleaner.
 */

export const logsRemover = async () => {
  await prisma.logs.deleteMany();
  await prisma.errors.deleteMany();
  fileCleaner();
};
