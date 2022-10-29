import express from "express";
import usersData from "../data/usersData.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/", authenticateToken, function (req, res) {
  res.json(usersData.filter((lot) => lot.username === req.user.username));
});

router.post("/", async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      username: req.body.username,
      password: hashedPassword,
      lottery: req.body.lottery,
    };
    usersData.push(user);
    res.status(201).send("The user is created succcesfully!");
  } catch {
    res.status(500).send();
  }
});

router.post("/login", async function (req, res) {
  const user = usersData.find((user) => user.username === req.body.username);
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  if (user == null) {
    return res.status(400).send("User cannot found!");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.json({ accessToken: accessToken });
    } else {
      res.send("Oh, it is not allowed!");
    }
  } catch {
    res.status(500).send();
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default router;
