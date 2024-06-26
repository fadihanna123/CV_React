import { prisma } from '../db';
import { DateTime } from 'luxon';

/**
 * Store errors in the database.
 * @param message
 * @param method
 * @param located
 */

export const storeError = async (
  message: string,
  method: string,
  located: string
): Promise<void> => {
  const rnd: number = Math.floor(Math.random() * 1000);

  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  await prisma.errors.create({
    data: {
      errorId: rnd,
      message,
      method,
      located,
      time,
    },
  });
};