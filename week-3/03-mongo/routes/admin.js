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
  const { title, description, price, imageLink } = req.body;

  if (title && description && price && imageLink) {
    await Course.create({ title, description, price, imageLink })
      .then((course) =>
        res.json({
          message: "Course created successfully",
          courseId: course._id,
        })
      )
      .catch((err) => {
        console.log(err);
        res.json({ message: "Some fields are missing" });
      });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  await Course.find()
    .then((course) => res.json(course))
    .catch((err) => {
      console.log("error hai", err);
      res.json({ errorIs: err });
    });
});

export default router;
