import mongoose, { Schema, model } from "mongoose";
// Connect to MongoDB

async function main() {
  return mongoose.connect(process.env.MONGOURL);
}
main().then(() => console.log("mongo is connected"));
// Define schemas
const AdminSchema = new Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

const CourseSchema = new Schema({
  // Schema definition here
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = model("Admin", AdminSchema);
const User = model("User", UserSchema);
const Course = model("Course", CourseSchema);

export { Admin, User, Course };
