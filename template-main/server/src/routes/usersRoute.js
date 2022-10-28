import express from "express";
import usersData from "../data/usersData.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", function (req, res) {
  return res.json(usersData);
});

router.post("/", async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    usersData.push(user);
    res.status(201).send("The user is created succcesfully!");
  } catch {
    res.status(500).send();
  }
});

router.post("/login", async function (req, res) {
  const user = usersData.find((user) => user.username === req.body.username);
  if (user == null) {
    return res.status(400).send("User cannot found!");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Successful!");
    } else {
      res.send("Oh, it is not allowed!");
    }
  } catch {
    res.status(500).send();
  }
});

export default router;
