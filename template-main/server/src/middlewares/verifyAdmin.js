import {ROLE, usersData} from "../data/usersData.js";

export function verifyAdmin(req, res, next){
    if(req.user.role.includes('admin')){
        return res.status(403).send("You are not admin");
    }
    else {
        next();
    }
}