import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req, res) => res.send('ok'));

export default router;
