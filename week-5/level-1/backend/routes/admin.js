import express from "express";

import { createAdmin, signinAdmin } from "../controllers/admin.js";
const adminRouter = express.Router();

adminRouter.post("/signin", signinAdmin);
adminRouter.post("/", createAdmin);
export default adminRouter;
