import crypto from 'crypto'
// Generate a random string of 64 characters
const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log("Generated JWT Secret Key:", jwtSecret);
