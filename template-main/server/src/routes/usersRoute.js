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
  if (usersData == null){
    return res.status(404).send("The user list is empty.")
  }
  return res.status(200).json(usersData.filter((lot) => lot.username === req.user.username));

});

router.post("/", verifyToken, userTaken, async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.id = findingLastId(usersData) + 1;
    const user = {
      userId: req.body.id,
      username: req.body.username,
      password: hashedPassword,
    };
    usersData.push(user);
    return res.status(201).send(user);
  } catch {
    return res.status(500).send();
  }
});

router.post("/tokens", findUser, async function (req, res) {
  const user = usersData.find((user) => user.username === req.body.username);
  const { password, ...bodyNoPassword } = user;
  const accessToken = jwt.sign(bodyNoPassword, process.env.ACCESS_TOKEN_SECRET);

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      return res.status(201).json({
        accessToken: accessToken,
        user: bodyNoPassword,
      });
    } else {
      return res.status(401).send("Oh, password is not correct! Try again!");
    }
  } catch {
    return res.status(500).send("It could not be generated.");
  }
});

export default router;
