import { DateTime } from 'luxon';
import { connection } from '../db';

/**
 * Store errors in the database.
 * @param message
 * @param method
 * @param located
 */

export const storeError = async (
  message: string,
  method?: string,
  located?: string
): Promise<void> => {
  const rnd: number = Math.floor(Math.random() * 1000);

  const time: string = DateTime.fromJSDate(new Date()).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  connection.query(
    'INSERT INTO errors (errorId, message, method, located, time) VALUES (?, ?, ?, ?, ?)',
    [rnd, message, method, located, time]
  );
};
