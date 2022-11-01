import express from "express";
import lotteriesData from "../data/lotteriesData.js";
import {
  findALottery,
  findLotteryForUser,
  findingLastId,
} from "../utils/lotteryDataUtils.js";

const router = express.Router();

router.get("/", function (req, res) {
  return res.json(lotteriesData);
});

router.get("/:id", function (req, res) {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ error: "The provided ID is not a number!" });
  }

  const resLot = findALottery(lotteriesData, Number.parseInt(req.params.id));

  if (resLot) {
    return res.json(resLot);
  }

  return res.status(404).json({ error: "The lottery with ID cant be found" });
});
router.get("/user/:id", function (req, res) {
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
router.post("/register", function (req, res) {
  try {
    req.body.id = findingLastId(lotteriesData) + 1;
    lotteriesData.push(req.body);
    res.status(201).json(req.body);
  } catch {
    res.status(500).send();
  }
});

export default router;
