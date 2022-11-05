import { ROLE, usersData } from "../data/usersData.js";
import { lotteriesData } from "../data/lotteriesData.js";

export function canReceiveLottery(user, lottery) {
  let u = usersData.filter((us) => us.userId === user.body.userId);
  return u.role === ROLE.ADMIN;
}

export function allowedLotteries(user) {
  if (user.role === ROLE.ADMIN) return lotteries;
}

export function allowedDelete(user) {
  return user.role === ROLE.ADMIN;
}
