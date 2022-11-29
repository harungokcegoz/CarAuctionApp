import express from "express";
import {bidsData} from "../data/bidsData.js";
import {verifyToken} from "../middlewares/verifyToken.js";
import {findABid, findBidOfUser, findBidsOfAuction, findingLastId} from "../utils/bidsDataUtils.js";
import {checkTheNumber} from "../middlewares/checkTheNumber.js";

const router = express.Router();

router.get("/", verifyToken, function(req,res){
    return res.json(bidsData);
});
router.get("/:id", verifyToken, checkTheNumber, function (req, res){
    const resBid = findABid(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.json(resBid);
    } else {
        return res.status(404).json({error : "The bid with ID cant be found"})
    }
});
router.post("/", verifyToken, function (req,res){
    try{
        req.body.id = findingLastId(bidsData) + 1;
        bidsData.push(req.body);
        res.status(201).json(req.body);
    }catch {
        res.status(500).send("It cannot be added")
    }
});
router.get("/users/:id", verifyToken, checkTheNumber, function (req,res){
    const resBid = findBidOfUser(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.json(resBid);
    } else {
        return status(404).json({error : "The bid with user ID cannot be found"})
    }
});
router.get("/auctions/:id", verifyToken, checkTheNumber, function (req,res){
    const resBid = findBidsOfAuction(bidsData, Number.parseInt(req.params.id));
    if (resBid){
        return res.json(resBid);
    } else {
        return status(404).json({error : "The bid with user ID cannot be found"})
    }
});

export default router;