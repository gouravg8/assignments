import express from "express";
import adminRouter from "./routes/admin.js";
import cardRouter from "./routes/card.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/card", cardRouter);
app.listen(port, () => console.log(`listening at port: ${port}`));
