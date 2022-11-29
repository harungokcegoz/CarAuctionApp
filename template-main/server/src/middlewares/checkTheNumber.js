export function checkTheNumber(req,res,next){
    if (isNaN(req.params.id)) {
        return res.status(400).json({ error: "The provided ID is not a number!" });
    } else {
        next();
    }
}