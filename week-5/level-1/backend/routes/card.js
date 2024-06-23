import express from "express";
import userVerification from "../middleware/userVerif.js";
import { createCard, getCard } from "../controllers/card.js";
const cardRouter = express.Router();

cardRouter.get("/", userVerification, getCard);

cardRouter.post("/", userVerification, createCard);
export default cardRouter;
