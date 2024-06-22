import { Card } from "../db/db.js";

const getCard = async (req, res) => {
  try {
    await Card.findOne({ name: req.headers.credential }).then((card) =>
      res.json(card)
    );
  } catch (error) {
    res.status(404).json(error);
  }
};

const createCard = async (req, res) => {
  const { name, description, interests, socials } = req.body;
  try {
    await Card.create({ name, description, interests, socials }).then(
      (card) => card && res.json({ message: "Card created successfully" })
    );
  } catch (error) {
    res.status(401).json(error);
  }
};
export { getCard, createCard };
