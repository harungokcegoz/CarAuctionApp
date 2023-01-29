import express from "express";
import { lotteriesData } from "../data/lotteriesData.js";
import {
  findALottery,
  findLotteryForUser,
  findingLastId, findLotIndex,
} from "../utils/lotteriesDataUtils.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import {checkTheNumber} from "../middlewares/checkTheNumber.js";
import {verifyAdmin} from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.get("/", verifyToken, function (req, res) {
  let result = lotteriesData;

  if ("carMake" in req.query) {
    result = result.filter((car) => car.carMake === req.query.carMake);
  }
  if ("location" in req.query) {
    result = result.filter((car) => car.location === req.query.location);
  }

  return res.json(result).send(200);
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
    return res.send(resLot);
  }

  return res.status(404).json({ error: "The lottery with the specified ID could not be found" });
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
    .json({ error: "The lottery with the user with specified ID could not be found" });
});

router.post("/", verifyToken, function (req, res) {
  try {
    req.body.id = findingLastId(lotteriesData) + 1;
    lotteriesData.push(req.body);
    res.status(201).json(req.body);
  } catch {
    res.status(500).send("It could not be added!");
  }
});

router.patch("/:id", verifyToken, checkTheNumber, function (req, res) {
  const { id } = req.params;
  let changes = req.body;

  if(changes == null){
    res.status(400).send("The body is empty.")
  }

  const found = findALottery(lotteriesData, Number.parseInt(req.params.id));

  if (found) {
    Object.assign(found, changes);
    res.status(200).send(found);
  } else {
    res.status(404).json({ message: "The specified lottery doesnt exist!" });
  }
});


router.delete("/:id",checkTheNumber ,verifyToken, function (req, res) {
  const id = Number.parseInt(req.params.id);
  const i = findLotIndex(lotteriesData, id)
  if (i === -1){
    return res.status(404).send("The auction could not found");
  }
  lotteriesData.splice(i, 1)
  res.status(200).send("It is deleted")
});

export default router;
