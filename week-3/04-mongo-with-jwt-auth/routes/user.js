import { Router } from "express";
const router = Router();
import userMiddleware from "../middleware/user.js";
import { Course, User } from "../db/index.js";
import jwt from "jsonwebtoken";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  try {
    if (username && password) {
      await User.create({ username, password }).then(() =>
        res.json({ message: "User created successfully" })
      );
    }
  } catch (error) {
    res.json(error);
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    if (username && password) {
      await User.find({ username, password }).then((user) => {
        if (user.length != 0) {
          const token = jwt.sign({ username }, process.env.JWTPASSKEY);
          res.json({ token, user });
        } else {
          res.json({ message: "user not found" });
        }
      });
    }
  } catch (error) {
    res.json(error);
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    await Course.find().then((courses) => {
      if (courses.length > 0) {
        res.json({ courses });
      } else {
        res.json({ message: "no course available" });
      }
    });
  } catch (error) {
    res.json(error);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  // Implement course purchase logic
  try {
    let course = await Course.findOne({ _id: courseId });
    await User.updateOne(
      { username: res.locals.user.username },
      { $push: { purchasedCourses: course } }
    ).then(() => {
      res.json({ message: "Course purchased successfully" });
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    await User.findOne({ username: res.locals.user.username })
      .populate("purchasedCourses")
      .then((allCourses) => {
        res.json({ purchasedCourses: allCourses.purchasedCourses });
      });
  } catch (error) {
    res.json(error);
  }
});

export default router;
