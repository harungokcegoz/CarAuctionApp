import express from "express";
import { usersData } from "../data/usersData.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findingLastId } from "../utils/usersDataUtils.js";
import { ROLE } from "../data/usersData.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { findUser, userTaken } from "../middlewares/findUser.js";
import {verifyAdmin} from "../middlewares/verifyAdmin.js";

const router = express.Router();
dotenv.config();

router.get("/", verifyToken, verifyAdmin, function (req, res) {

  res.json(usersData.filter((lot) => lot.username === req.user.username));

});

router.post("/", userTaken, async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.id = findingLastId(usersData) + 1;
    const user = {
      userId: req.body.id,
      username: req.body.username,
      password: hashedPassword,
    };
    usersData.push(user);
    res.status(201).send(user);
  } catch {
    res.status(500).send();
  }
});

router.post("/tokens", findUser, async function (req, res) {
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

export default router;
