import express from "express";
import { lotteriesData, setLotteries } from "../data/lotteriesData.js";
import {
  findALottery,
  findLotteryForUser,
  findingLastId,
} from "../utils/lotteriesDataUtils.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import {checkTheNumber} from "../middlewares/checkTheNumber.js";

const router = express.Router();
//add authenticateToken middleware for admin
router.get("/", verifyToken, function (req, res) {
  let result = lotteriesData;

  if ("carMake" in req.query) {
    result = result.filter((car) => car.carMake === req.query.carMake);
  }
  if ("location" in req.query) {
    result = result.filter((car) => car.location === req.query.location);
  }

  return res.json(result);
});

// router.get("/", authenticateToken, function (req, res) {
//   const result = {};
//   let make = req.query.carMake;
//   let location = req.query.location;
//
//   if (req.query === null) return res.json(lotteriesData);
//   else {
//     const foundMake = lotteriesData.filter((lot) => lot.carMake === make);
//     const foundLocation = lotteriesData.filter(
//       (lot) => lot.location === location
//     );
//     result = { foundMake, foundLocation };
//     return res.json(result);
//   }
// });

router.get("/:id", verifyToken, checkTheNumber, function (req, res) {
  const resLot = findALottery(lotteriesData, Number.parseInt(req.params.id));

  if (resLot) {
    return res.json(resLot);
  }

  return res.status(404).json({ error: "The lottery with ID cant be found" });
});

router.get("/users/:id", verifyToken, checkTheNumber, function (req, res) {
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
router.post("/", verifyToken, function (req, res) {
  try {
    req.body.id = findingLastId(lotteriesData) + 1;
    lotteriesData.push(req.body);
    res.status(201).json(req.body);
  } catch {
    res.status(500).send("It cannot be added!");
  }
});
router.patch("/:id", function (req, res) {
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

router.delete("/:id", verifyToken, function (req, res) {
  const resLot = findLotteryForUser(
    lotteriesData,
    Number.parseInt(req.params.id)
  );
  try {
    if (resLot) {
      setLotteries(lotteriesData.filter((lot) => lot.id !== req.params.id));
      res.status(201).send("It is deleted!");
    }
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
