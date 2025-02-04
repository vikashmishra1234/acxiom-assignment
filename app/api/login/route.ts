// routes.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Placeholder user data
const users = [
  { id: 1, username: 'admin', password: 'password', role: 'admin' },
  { id: 2, username: 'user', password: 'password', role: 'user' },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((u) => u.username === username);

    if (user && user.password === password) {
      // Return the user's information (id, role)
      res.status(200).json({ userId: user.id, role: user.role });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}