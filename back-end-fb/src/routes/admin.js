import express from 'express';
import { createServer } from '../controllers/admin/ServerController';
const router = express.Router();


router.post("/servers", createServer);

module.exports = router;
