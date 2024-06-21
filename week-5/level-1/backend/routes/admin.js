import express from "express";
import userVerification from "../middleware/userVerif.js";
import { Admin } from "../db/db.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const userExisted = await Admin.findOne({ username });
  if (userExisted) {
    res.json({ message: "Admin already existed" });
  } else {
    await Admin.create({ username, password }).then((user) =>
      res.json({ message: "Admin created with username " + username })
    );
  }
});
export default router;
