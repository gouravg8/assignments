import express from "express";
import adminRouter from "./routes/admin.js";
import cardRouter from "./routes/card.js";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
process.loadEnvFile(".env.local");
const app = express();
const port = 3000;

app.use(cors());
app.use(
  session({
    secret: process.env.SESSIONKEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: "2d",
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/iamadmin", adminRouter);
app.use("/card", cardRouter);
app.listen(port, () => console.log(`listening at port: ${port}`));
