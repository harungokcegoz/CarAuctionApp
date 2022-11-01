import express from "express";
import usersData from "../data/usersData.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findingLastId } from "../utils/usersDataUtils.js";

const router = express.Router();
dotenv.config();

router.get("/", authenticateToken, function (req, res) {
  res.json(usersData.filter((lot) => lot.username === req.user.username));
});

router.post("/register", userTaken, async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.id = findingLastId(usersData) + 1;
    const user = {
      user_id: req.body.id,
      username: req.body.username,
      password: hashedPassword,
    };
    usersData.push(user);
    res.status(201).send("The user is created succcesfully!");
  } catch {
    res.status(500).send();
  }
});

router.post("/login", userInfo, async function (req, res) {
  const user = usersData.find((user) => user.username === req.body.username);
  const { password, ...bodyNoPassword } = user;
  const accessToken = jwt.sign(bodyNoPassword, process.env.ACCESS_TOKEN_SECRET);

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.json({
        accessToken: accessToken,
        user: bodyNoPassword,
      });
    } else {
      res.status(401).send("Oh, password is not correct! Try again!");
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

function userInfo(req, res, next) {
  const user = usersData.find((user) => user.username === req.body.username);
  if (user == null) {
    return res
      .status(400)
      .send("User cannot found! Please be sure you enter a valid username!");
  } else {
    next();
  }
}
function userTaken(req, res, next) {
  const user = usersData.find((user) => user.username === req.body.username);
  if (!(user == null)) {
    return res.status(400).send("This username is already taken!");
  } else {
    next();
  }
}

export default router;
