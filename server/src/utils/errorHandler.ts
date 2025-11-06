import type { Request, Response } from 'express';
import { logger } from '../tools';

/**
 * Handle server errors.
 * @param error
 * @param _req
 * @param res
 */

export const errorHandler = (error: Error, _req: Request, res: Response) => {
    if (error) {
        logger.error('Unhandled error', { error: error.message });
        res.status(500).json({ error: 'Server error.' });
        res.end();
    }
};
