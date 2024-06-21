import express from "express";
import userVerification from "../middleware/userVerif.js";
const router = express.Router();

router.post("/", userVerification, (req, res) => {
  res.send("hello from admin route");
});
export default router;
