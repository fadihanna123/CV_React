import { prisma } from 'db';
import { Request, Response } from 'express';
import { logger } from 'tools';
import { apiKey, authorizationKey, storeError } from 'utils';

/**
 * Get all menu items.
 *
 * @route GET /menu
 * @param req
 * @param res
 */

export const getMenu = async (req: Request, res: Response) => {
  if (
    req.get('apiKey') === apiKey &&
    req.get('Authorization') === authorizationKey
  ) {
    const getList = await prisma.menu.findMany();
    res.json(getList);
  } else {
    storeError('No headers provided!', 'GET', '/menu');
    logger.error('No headers provided on GET /menu!');

    res.json({ message: 'FORBIDDEN' });
  }
};
