import { Admin } from "../db/index.js";

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  await Admin.find({
    username: username,
    password: password,
  })
    .then((admin) => {
      if (admin.length > 0) {
        next();
      } else {
        console.log("no user found with this username and password");
        return false;
      }
    })
    .catch((err) => console.log(err));
}

export default adminMiddleware;
