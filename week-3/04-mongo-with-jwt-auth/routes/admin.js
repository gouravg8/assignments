import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
const router = Router();
import { Admin, Course } from "../db/index.js";
import jwt from "jsonwebtoken";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    if (!(username && password)) {
      res.status(400).json({ message: "Pleaser enter username and password" });
    }
    const adminExisted = await Admin.findOne({ username });
    // console.log(adminExisted);
    if (adminExisted) {
      res.status(409).json({ message: "Admin already existed" });
    } else {
      await Admin.create({ username, password }).then(() => {
        const token = jwt.sign({ username }, process.env.JWTPASSKEY);
        res.json({ message: "Admin created successfully", token });
      });
    }
  } catch (error) {
    console.log(error);
  }
  // get all data from user
  // all the data should be existed
  // chech if user already existed
  // encrypt the password
  // save the user data in db
  // generate the token for user and send it
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    if (!(username && password)) {
      res.status(400).json({ message: "Pleaser enter username and password" });
    }
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username }, process.env.JWTPASSKEY);

      let options = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).json({ token });
    } else {
      res.json({ message: "No user found" });
    }
  } catch (error) {
    res.json({ message: "error: " + error });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  try {
    await Course.create({
      title,
      description,
      price,
      imageLink,
    }).then((course) => {
      res.json({
        message: "Course created successfully",
        courseId: course._id,
      });
    });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    await Course.find().then((course) => {
      res.json(course);
    });
  } catch (error) {
    res.json(error);
  }
});

export default router;
