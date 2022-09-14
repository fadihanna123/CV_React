import { getMenu, sendMail } from 'controllers';
import { Router } from 'express';

const router: Router = Router();

// Get all menu items.
router.get('/menu', getMenu);

// Send a mail message.
router.post('/mailit', sendMail);

export default router;
