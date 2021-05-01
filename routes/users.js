import express from 'express';
import { createUser, getUser, deleteUser, patchUser } from '../controllers/users.js';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/id', deleteUser);

router.patch('/id', patchUser);

export default router;