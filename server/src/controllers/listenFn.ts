import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils';

/**
 * Listen to the server.
 */

export const listenFn = () => {
  storeLog(`Server listening on port ${port}...`, '', '/');
  logger.info(`Server listening on port ${port}...`);
};