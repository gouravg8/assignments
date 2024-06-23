import { Admin } from "../db/db.js";
import jwt from "jsonwebtoken";
process.loadEnvFile("./.env.local");

async function userVerification(req, res, next) {
  const { credential } = req.headers;
  try {
    const decode = jwt.verify(credential, process.env.JWTSECRETKEY);
    if (decode) {
      await Admin.findOne({ username: decode }).then((admin) => {
        if (admin) {
          console.log("user found");
          next();
        } else throw Error("User not found");
      });
    }
  } catch (error) {
    res.json({ err: error.message });
  }
}
export default userVerification;
