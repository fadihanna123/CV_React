import { fileCleaner } from './fileClenaer';
import { connection } from '../db';

/**
 * Clean error and logs data in database and call fileCleaner.
 */
export const logsRemover = (): void => {
  connection.query('DELETE FROM logs');
  connection.query('DELETE FROM errors');
  fileCleaner();
};
