import User from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const register = async (req, res) => {
  const { username, password, role } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }


  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword, role });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    
    const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';
    
    // Sign the token using the secret key
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    return res.json({ token ,username,id: user._id,  message:"login successfully",
  
     });

  }
  res.status(401).json({ message: 'Invalid credentials' });
};

export {register ,login}