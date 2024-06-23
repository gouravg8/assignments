import { Admin } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
process.loadEnvFile("./.env.local");

const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 8);

    const userExisted = await Admin.findOne({ username });
    if (userExisted) {
      res.json({ message: "Admin already existed" });
    } else {
      await Admin.create({ username, password: hashedPassword }).then(
        (user) => {
          const token = jwt.sign(user.username, process.env.JWTSECRETKEY);
          req.session.token = token;
          res;
          d.json({
            message: "Admin created with username " + username,
            token,
          });
        }
      );
    }
  } catch (error) {
    req.json(error);
  }
};

const signinAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExisted = await Admin.findOne({ username }).then(async (user) => {
      const samePass = await bcrypt.compare(password, user.password);
      // console.log({ user, hashedPassword });
      if (!samePass) {
        res.status(403).json({ message: "Invalid credential" });
      } else {
        // req.session.username = user.username;
        // req.session.password = user.password;
        let token = jwt.sign(user.username, process.env.JWTSECRETKEY);
        res.json({ message: "success", token });
      }
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export { createAdmin, signinAdmin };
