import { Admin } from "../db/db.js";
import bcrypt from "bcrypt";

const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  // hashing password
  const hashedPassword = await bcrypt.hash(password, 8);

  const userExisted = await Admin.findOne({ username });
  if (userExisted) {
    req.session.username = userExisted.username;
    req.session.password = userExisted.password;
    res.json({ message: "Admin already existed" });
  } else {
    await Admin.create({ username, password: hashedPassword }).then((user) => {
      req.session.username = user.username;
      req.session.password = user.password;
      res.json({ message: "Admin created with username " + username });
    });
  }
};

const signinAdmin = async (req, res) => {
  const { username, password } = req.body;

  const userExisted = await Admin.findOne({ username }).then(async (user) => {
    const samePass = await bcrypt.compare(password, user.password);
    // console.log({ user, hashedPassword });
    if (!samePass) {
      res.status(403).json({ message: "Invalid credential" });
    } else {
      req.session.username = user.username;
      req.session.password = user.password;
      res.json({ message: "Logged in...", reqq: req.session });
    }
  });
};
export { createAdmin, signinAdmin };
