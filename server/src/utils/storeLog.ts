import { prisma } from '../db';
import { DateTime } from 'luxon';

/**
 * Store logs in the database.
 * @param message
 * @param method
 * @param located
 */

export const storeLog = async (
  message: string,
  method: string,
  located: string
) => {
  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  await prisma.logs.create({
    data: {
      message,
      method,
      located,
      time,
    },
  });
};