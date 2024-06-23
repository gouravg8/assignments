import { Card } from "../db/db.js";
import jwt from "jsonwebtoken";
process.loadEnvFile("./.env.local");

const getCard = async (req, res) => {
  try {
    let { credential } = req.headers;
    const decode = jwt.verify(credential, process.env.JWTSECRETKEY);
    await Card.findOne({ owener: decode }).then((card) => res.json(card));
  } catch (error) {
    res.status(404).json(error);
  }
};

const createCard = async (req, res) => {
  let { credential } = req.headers;
  const { name, description, interests, socials } = req.body;
  try {
    const decodedUsername = jwt.verify(credential, process.env.JWTSECRETKEY);
    await Card.create({
      name,
      description,
      interests,
      socials,
      owener: decodedUsername,
    }).then(
      (card) => card && res.json({ message: "Card created successfully" })
    );
  } catch (error) {
    res.status(401).json(error);
  }
};
export { getCard, createCard };
