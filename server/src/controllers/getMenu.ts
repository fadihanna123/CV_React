import { prisma } from '../db';
import type { Request, Response } from 'express';
import { logger } from '../tools';
import { apiKey, storeError } from '../utils';

/**
 * Get all menu items.
 * @route GET /menu
 * @param { Request } req
 * @param { Response } res
 */

export const getMenu = async (req: Request, res: Response) => {
  if (req.get('apiKey') === apiKey) {
    const getList = await prisma.menu.findMany();
    if (getList.length === 0) {
      storeError('No menu links exist.', 'GET', '/api/menu');
      logger.error('No menu links exist.');
    }

    setTimeout(() => {
      res.json(getList);
    }, 2000);
  } else {
    storeError('No headers provided!', 'GET', '/api/menu');
    logger.error('No headers provided on GET /api/menu!');

    res.json({ message: 'FORBIDDEN' });
  }
};
