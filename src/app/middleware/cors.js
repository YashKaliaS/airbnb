import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  origin: '*', // Allow all origins. Change to a specific origin if needed.
});

// Helper function to wait for middleware execution
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  // Your API route logic here
  res.json({ message: 'Hello World' });
}
