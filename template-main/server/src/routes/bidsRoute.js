import express from "express";
import {bidsData} from "../data/bidsData.js";
import {verifyToken} from "../middlewares/verifyToken.js";
import {findABid, findBidOfUser, findBidsOfAuction, findingLastId} from "../utils/bidsDataUtils.js";
import {checkTheNumber} from "../middlewares/checkTheNumber.js";
import {verifyAdmin} from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, function(req,res){
    let result = bidsData;

    if(result == null){
        return res.status(404).send("The bids list is empty.")
    }
    return res.json(result).send(200);
});

router.get("/:id", verifyToken, checkTheNumber, function (req, res){
    const resBid = findABid(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.status(200).json(resBid);
    } else {
        return res.status(404).json({error : "The bid with the specified ID cant be found"})
    }
});

router.post("/", verifyToken, function (req,res){
    try{
        req.body.id = findingLastId(bidsData) + 1;
        bidsData.push(req.body);
        return res.status(201).json(req.body);
    }catch {
        return res.status(500).send("It couldn't be added.")
    }
});

router.get("/users/:id", verifyToken, checkTheNumber, function (req,res){
    const resBid = findBidOfUser(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.status(200).json(resBid);
    } else {
        return res.status(404).json({error : "The bid with the user with specified ID could not be found"})
    }
});

router.get("/auctions/:id", verifyToken, checkTheNumber, function (req,res){
    const resBid = findBidsOfAuction(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.status(200).json(resBid);
    } else {
        return res.status(404).json({error : "The bid with auction ID could not be found"})
    }
});

export default router;