import { connection } from '../db';
import { DateTime } from 'luxon';

/**
 * Store logs in the database.
 * @param message
 * @param method
 * @param located
 */

export const storeLog = async (
  message: string,
  method?: string,
  located?: string
) => {
  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  connection.query(
    'INSERT INTO logs (message, method, located, time) VALUES (?, ?, ?, ?)',
    [message, method, located, time]
  );
};
