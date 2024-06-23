import mongoose, { connect, model, Schema } from "mongoose";
process.loadEnvFile("./.env.local");

async function main() {
  await connect(process.env.MONGOURL).then(() =>
    console.log("mongo connected")
  );
}

main();

const adminSchema = Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const cardSchema = Schema({
  name: { type: String, minLength: 3, maxLength: 20, required: true },
  description: { type: String, maxLength: 50 },
  interests: { type: [String], required: true },
  socials: {
    type: [[String, String]],
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  owener: {
    type: String,
  },
});
const Admin = new model("Admin", adminSchema);
const Card = new model("Card", cardSchema);
export { Admin, Card };
