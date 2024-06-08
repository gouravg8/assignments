import { Router } from "express";
const router = Router();
import userMiddleware from "../middleware/user.js";
import { Course, User } from "../db/index.js";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  await User.create({ username, password })
    .then(() => res.json({ message: "User created successfully" }))
    .catch((err) => res.json({ error: err }));
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  await Course.find()
    .then((course) => res.json(course))
    .catch((err) => res.json(err));
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const { username, password } = req.headers;

  let newPurchasedCourse = await Course.findById(courseId);

  let person = await User.find({ username, password });
  if (Object.keys(person).length > 0) {
    let user = await User.findById(person[0]._id.valueOf());
    user.purchasedCourses.$push(newPurchasedCourse);
    await user
      .save()
      .then((course) => res.json({ message: "courses added success" }))
      .catch((err) => console.log("error hai update", err));
  } else {
    await User.create({
      username,
      password,
      purchasedCourses: [newPurchasedCourse],
    })
      .then((course) => res.json({ message: "Course purchased successfully" }))
      .catch((err) => console.log("error hai create", err));
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.headers;
  await User.find({ username })
    .populate("purchasedCourses")
    .then((course) => res.json(course[0]))
    .catch((err) => console.log("err /purchased", err));
});

export default router;
