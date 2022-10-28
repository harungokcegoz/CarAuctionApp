import express from "express";
import lotteriesData from "../data/lotteriesData.js";
import { findALottery } from "../utils/lotteryDataUtils.js";

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

  return res
    .status(404)
    .json({ error: "The lottery with ID ${req.params.id} cant be found" });
});

export default router;
