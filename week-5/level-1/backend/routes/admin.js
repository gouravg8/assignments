import express from "express";
import userVerification from "../middleware/userVerif.js";
import { Admin } from "../db/db.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const userExisted = await Admin.findOne({ username });
  if (userExisted) {
    req.session.username = userExisted.username;
    req.session.password = userExisted.password;
    res.json({ message: "Admin already existed" });
  } else {
    await Admin.create({ username, password }).then((user) => {
      req.session.username = user.username;
      req.session.password = user.password;
      res.json({ message: "Admin created with username " + username });
    });
  }
});
export default router;
