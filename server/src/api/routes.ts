import { getMenu, sendMail } from 'controllers';
import { Router } from 'express';

const router: Router = Router();

router.get('/menu', getMenu);

router.post('/mailit', sendMail);

export default router;
