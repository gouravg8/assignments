import { Admin } from "../db/db.js";
async function userVerification(req, res, next) {
  const { username, password } = req.headers;
  await Admin.findOne({ username, password })
    .then((admin) => {
      if (admin) {
        console.log("user found");
        res.headers.set("username", username);
        next();
      }
      throw Error("User not found");
    })
    .catch((err) => res.json({ err }));
}
export default userVerification;
