import {Router} from 'express';
import { ping, home } from '../controllers/index.controller.js';

const router = Router();

router.get('/ping', ping);
router.get('/', home);

export default router;