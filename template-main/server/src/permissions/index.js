import { ROLE, usersData } from "../data/usersData.js";

export function canReceiveLottery(user) {
  let u = usersData.filter((us) => us.userId === user.body.userId);
  return u.role === ROLE.ADMIN;
}

export function allowedLotteries(user) {
  if (user.role === ROLE.ADMIN) return lotteries;
}

export function allowedDelete(user) {
  return user.role === ROLE.ADMIN;
}
