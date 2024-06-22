import express from "express";
import userVerification from "../middleware/userVerif.js";
import { Card } from "../db/db.js";
const router = express.Router();

router.get("/", userVerification, async (req, res) => {
  try {
    await Card.findOne({ name: req.headers.name }).then((card) =>
      res.json(card)
    );
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", userVerification, async (req, res) => {
  const { name, description, interests, socials } = req.body;
  try {
    await Card.create({ name, description, interests, socials }).then(
      (card) => card && res.json({ message: "Card created successfully" })
    );
  } catch (error) {
    res.status(401).json(error);
  }
});
export default router;
