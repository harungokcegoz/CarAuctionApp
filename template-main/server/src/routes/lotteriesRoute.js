import express from "express";
import { lotteriesData, setLotteries } from "../data/lotteriesData.js";
import {
  findALottery,
  findLotteryForUser,
  findingLastId,
} from "../utils/lotteryDataUtils.js";
import { authUser, authRole } from "../auth/auth.js";
import { ROLE, usersData } from "../data/usersData.js";
import {
  canReceiveLottery,
  allowedLotteries,
  allowedDelete,
} from "../permissions/index.js";

const router = express.Router();

router.get("/", authUser, function (req, res) {
  return res.json(lotteriesData);
});

router.get("/:id", authUser, authGetLottery, function (req, res) {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ error: "The provided ID is not a number!" });
  }

  const resLot = findALottery(lotteriesData, Number.parseInt(req.params.id));

  if (resLot) {
    return res.json(resLot);
  }

  return res.status(404).json({ error: "The lottery with ID cant be found" });
});
router.get("/user/:id", authUser, function (req, res) {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ error: "The provided ID is not a number!" });
  }

  const resLot = findLotteryForUser(
    lotteriesData,
    Number.parseInt(req.params.id)
  );

  if (resLot) {
    return res.json(resLot);
  }

  return res
    .status(404)
    .json({ error: "The lottery with user ID cant be found" });
});
router.post("/register", authUser, function (req, res) {
  try {
    req.body.id = findingLastId(lotteriesData) + 1;
    lotteriesData.push(req.body);
    res.status(201).json(req.body);
  } catch {
    res.status(500).send();
  }
});
router.patch("/edit/:id", authUser, function (req, res) {
  const { id } = req.params;
  let changes = req.body;

  const found = findALottery(lotteriesData, Number.parseInt(req.params.id));

  if (found) {
    Object.assign(found, changes);
    res.status(200).send(found);
  } else {
    res.status(404).json({ message: "Lottery doesnt exist!" });
  }
});

router.delete("/delete/:id", authUser, authDeleteLottery, function (req, res) {
  const resLot = findLotteryForUser(
    lotteriesData,
    Number.parseInt(req.params.id)
  );
  try {
    if (resLot) {
      setLotteries(lotteriesData.filter((lot) => lot.id !== req.params.id));
      res.status(201).json(req.body);
    }
  } catch (error) {
    res.status(500).send();
  }
});

function authGetLottery(req, res, next) {
  if (!canReceiveLottery(req.body)) {
    res.status(401);
    return res.send("Not Allowed!");
  }
  next();
}

function authDeleteLottery(req, res, next) {
  if (!allowedDelete(req.body)) {
    res.status(401);
    return res.send("Not Allowed!");
  }
  next();
}

export default router;
