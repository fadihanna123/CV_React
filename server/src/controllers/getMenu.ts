import { prisma } from '../db';
import type { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, authorizationKey, storeError } from '../utils';

/**
 * Get all menu items.
 * @route GET /menu
 * @param { Request } req
 * @param { Response } res
 */

export const getMenu = async (req: Request, res: Response) => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const getList = await prisma.menu.findMany();
    if (getList.length === 0) {
      storeError('No menu links exist.', 'GET', '/menu');
      logger.error('No menu links exist.');
    }

    setTimeout(() => {
      res.json(getList);
    }, 2000);
  } else {
    storeError('No headers provided!', 'GET', '/menu');
    logger.error('No headers provided on GET /menu!');

    res.json({ message: 'FORBIDDEN' });
  }
};
