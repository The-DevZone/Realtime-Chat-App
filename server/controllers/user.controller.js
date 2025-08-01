
import User from "../models/user.model.js"; // if needed

const user = async (req, res) => {
  const { firstName, userName, password, gender } = req.body;

  console.log("User data: ", req.body);
  console.log(firstName , userName, password, gender);

  if (!userName) {
    return res.status(400).json({ message: "Username is required" });  // ✅ Stops here
  }

  // continue only if userName exists
  return res.status(200).json({ message: "User registered successfully" });
};

export default user;