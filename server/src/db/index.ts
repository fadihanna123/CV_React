import { PrismaClient } from '@prisma/client';
import { logger } from '../tools';

export const prisma = new PrismaClient();

export const connectDb = async () => {
  try {
    await prisma.$connect();
    logger.info('Datbase is connected');
  } catch (error) {
    logger.info('Error connecting to db', error);
  }
};