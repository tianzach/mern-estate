import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteListing } from '../controllers/listing.controller.js';
import { updateListing } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/create', verifyToken,createListing);

router.delete('/delete/:id', verifyToken, deleteListing);

router.post('/update/:id', verifyToken, updateListing);

export default router;