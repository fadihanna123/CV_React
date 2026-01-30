import { logger } from '@core/tools';
import { storeError, storeLog } from '@core/utils';
import mysql, { Connection } from 'mysql2';

/**
 * @author Fadi Hanna
 */

const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PSW, DATABASE_NAME } =
  process.env;

// Create the connection to database
export const connection: Connection = mysql.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USERNAME,
  password: DATABASE_PSW,
  database: DATABASE_NAME,
});

/**
 * Connect the database and check if it success.
 * @function connectDb
 * @async
 * @returns { Promise<void> } A promise
 * @example connectDb();
 */
export const connectDb = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already connected
    if (connection.state === 'connected') {
      logger.info('Already connected to database');
      return resolve();
    }

    // Test the connection
    connection.ping((err) => {
      if (err) {
        const errorMsg: string = `Database connection failed: ${err.message}`;
        logger.error(errorMsg);
        storeError(errorMsg);
        return reject(err);
      }

      logger.info('Successfully connected to database');
      storeLog('Successfully connected to database');
      resolve();
    });
  });
};
