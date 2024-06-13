import jwt from "jsonwebtoken";
import { User } from "../db/index.js";
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWTPASSKEY);
    if (decode.username) {
      await User.findOne({ username: decode.username }).then((user) => {
        if (user.length != 0) {
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.json({ message: "there is no username in jwt token" });
    }
  } catch (error) {
    res.json(error);
  }
}

export default userMiddleware;
