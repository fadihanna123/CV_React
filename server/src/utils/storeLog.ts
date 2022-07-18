import { prisma } from 'db';
import { DateTime } from 'luxon';

export const storeLog = async (message: string, method: string, located: string) => {
  const time: string = DateTime.fromJSDate(new Date()).toFormat('yyyy-MM-dd HH:mm');

  await prisma.logs.create({
    data: {
      message,
      method,
      located,
      time,
    },
  });
};
