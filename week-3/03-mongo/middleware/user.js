import { User } from "../db/index.js";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  await User.find({ username, password })
    .then((user) => {
      next();
    })
    .catch((err) => {
      console.log("log from userMiddleware", err);
    });
}

export default userMiddleware;
