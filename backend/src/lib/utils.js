import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
<<<<<<< HEAD
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not configured");

  const token = jwt.sign({ userId }, JWT_SECRET, {
=======
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
>>>>>>> 1e60e47e1357652a56131ee0dee91460993c9b9f
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === "development" ? false : true,
    sameSite: "strict",
  });
};
