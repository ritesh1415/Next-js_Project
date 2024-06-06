import User from '../models/User.js';

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

const updateUser = async (req, res) => {
  const { username, role } = req.body;
  const userId = req.params.id;
  if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  await User.findByIdAndUpdate(userId, { username, role });
  res.json({ message: 'User updated successfully' });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  await User.findByIdAndDelete(userId);
  res.json({ message: 'User deleted successfully' });
};

export { getUsers, getUser, updateUser, deleteUser };
