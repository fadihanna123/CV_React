import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils';

export const listenFn = () => {
  storeLog(`Server listening on port ${port}...`, '', '/');
  logger.debug(`Server listening on port ${port}...`);
};
