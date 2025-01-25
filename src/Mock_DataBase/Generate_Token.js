import jwt from 'jsonwebtoken';

// Secret key for signing (no need for TextEncoder in jsonwebtoken)
const secretKey = '01032022';  // Use environment variables in production

// Generate JWT
const generateToken = (user) => {
  try {
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role, businessId: user.businessId },
      secretKey,
      { expiresIn: '1h' }
    );
    return token;
  } catch (err) {
    console.error('Error generating token:', err);
    return null;
  }
};

// Verify JWT
const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (err) {
    console.error('Invalid or expired token:', err);
    return null;
  }
};

export { generateToken, verifyToken };
