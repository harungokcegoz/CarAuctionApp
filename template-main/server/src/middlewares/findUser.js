import {usersData} from "../data/usersData.js";

export function findUser(req, res, next) {
  const user = usersData.find((user) => user.username === req.body.username);
  if (user == null) {
    return res
      .status(400)
      .send("User cannot found! Please be sure you enter a valid username!");
  } else {
    next();
  }
}

export function userTaken(req, res, next) {
  const user = usersData.find((user) => user.username === req.body.username);
  if (!(user == null)) {
    return res.status(400).send("This username is already taken!");
  } else {
    next();
  }
}
