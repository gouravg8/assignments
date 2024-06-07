import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
const router = Router();
import { Admin, Course } from "../db/index.js";
import mongoose from "mongoose";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (username && password) {
    await Admin.create({ username, password });
  }
  res.json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { username, password } = req.headers;
  const { title, description, price, imageLink } = req.body;

  console.log(username, password);

  //   try {
  //     const out = await Course.create({ title, description, price, imageLink });
  //     res.json({ message: "Course created successfully", courseId: out._id });
  //   } catch (error) {
  //     console.log(error);
  //   }
  res.json({ message: "hello biro" });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

export default router;
