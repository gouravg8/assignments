import jwt from "jsonwebtoken";
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWTPASSKEY);
  console.log("decode", decode);
  try {
    if (decode.username) {
      next();
    } else {
      res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Incorrect inputs" });
  }
}

export default adminMiddleware;
