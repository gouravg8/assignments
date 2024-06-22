import { Admin } from "../db/db.js";

async function userVerification(req, res, next) {
  const { username, password } = req.headers;
  await Admin.findOne({ username, password })
    .then((admin) => {
      if (admin) {
        console.log("user found");
        req.session.username = username;
        req.session.password = password;
        next();
      } else throw Error("User not found");
    })
    .catch((err) => res.json({ err: err.message }));
}
// }
export default userVerification;
