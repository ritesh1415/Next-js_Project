import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../Controllers/userController.js';
const router = express.Router();
import auth from '../Middlewares/auth.js'
import checkRole from '../Middlewares/checkRole.js';
router.get('/', auth, checkRole('admin'), getUsers);
router.get('/:id', auth, checkRole('admin'), getUser);
router.put('/:id', auth, checkRole('admin'), updateUser);
router.delete('/:id', auth, checkRole('admin'), deleteUser);

export default router
