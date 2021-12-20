import { Router } from "express";

import { sendMail } from "controllers";

const router: Router = Router();

router.post("/mailit", sendMail);

export default router;
